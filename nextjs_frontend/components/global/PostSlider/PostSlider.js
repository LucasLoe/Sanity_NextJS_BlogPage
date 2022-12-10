import { useState, useRef, createRef, useEffect, useLayoutEffect } from "react";
import {
  BsCaretLeft,
  BsCaretRight,
  BsDiamond,
  BsDiamondFill,
} from "react-icons/bs";
import client from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { toPlainText } from "../../../functions/ToPlainText";
import { addRequestMeta } from "next/dist/server/request-meta";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function PostSlider({
  showPageNumber,
  colorHex = "#3b82f6",
  pageData,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [numPerPage, setNumPerPage] = useState(3);
  const touchPos = useRef(null);

  const mainColor = `[${colorHex}]`;

  // calculate number of posts per slider page based on window width -- needs to be called once due to SSR of NextJS
  if (typeof window !== "undefined") {
    useEffect(() => {
      function handleResize() {
        let tempNumPerPage =
          window.innerWidth > 1280
            ? 3
            : Math.floor(window.innerWidth / 420) == 0
            ? 1
            : Math.floor(window.innerWidth / 420);
        setNumPerPage(tempNumPerPage);
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  }

  const pageArr =
    pageData &&
    pageData.reduce((arr, p, i) => {
      const chunk = Math.floor(i / numPerPage);
      arr[chunk] = [].concat(arr[chunk] || [], p);

      return arr;
    }, []);

  const refs =
    pageArr &&
    pageArr.reduce((acc, val, i) => {
      acc[i] = createRef();
      return acc;
    }, {});

  const scrollToPage = (i) => {
    setCurrentPage(i);

    refs[i].current.scrollIntoView({
      block: "nearest",
    });
  };

  const numOfPages = pageArr.length;

  const nextPage = () => {
    if (currentPage >= numOfPages - 1) {
      return;
    } else {
      scrollToPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage === 0) {
      return;
    } else {
      scrollToPage(currentPage - 1);
    }
  };

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousPage : nextPage}
      className={`absolute text-blue-300 z-10 h-15 w-15 flex items-center justify-center bottom-0 top-0 ${
        isLeft ? "left-2" : "right-2"
      }`}
    >
      <span role="post" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? (
          <BsCaretLeft className="hover:text-blue-500 h-10 w-10 opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
        ) : (
          <BsCaretRight className="hover:text-blue-500 h-10 w-10 opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
        )}
      </span>
    </button>
  );

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    touchPos.current = touchDown;
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPos.current;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 7) {
      nextPage();
    }

    if (diff < -7) {
      previousPage();
    }

    touchPos.current = null;
  };

  return (
    <div className="flex justify-center w-full items-center bg-transparent">
      <div className="relative w-full pb-8">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="w-full inline-flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar"
        >
          {pageArr &&
            pageArr.map((postChunk, i) => (
              <div
                className="w-full h-full flex-shrink-0 flex px-8 py-4 snap-center snap-always justify-start"
                key={"postChunk" + i}
                ref={refs[i]}
              >
                {postChunk &&
                  postChunk.map((post, k) => (
                    <div className="h-auto w-full md:w-[300px] bg-white shadow-xl flex flex-col text-center px-4 py-4 mx-auto">
                      <div className="" key={"post-image" + k + i}>
                        <img
                          className="object-cover mx-auto"
                          src={urlFor(post.mainImage)}
                        />
                      </div>
                      <h3
                        className="mt-4 mb-2 font-bold"
                        key={"post-title" + k + i}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm" key={"post-author" + k + i}>
                        {"by " + post.name}
                      </p>
                      <p className="my-2 mb-6" key={"post-body" + k + i}>
                        {toPlainText(post.body, 25)}
                      </p>

                      <button className="mb-6 mt-auto transition ease-in-out hover:scale-[1.1] active:scale-[1.1] duration-200 text-sm bg-transparent my-auto hover:bg-blue-500 text-blue-700 font-semibold w-32 mx-auto hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded">
                        Read More...
                      </button>

                      <div id="meta" className="flex justify-between italic">
                        <p className="text-sm" key={"post-date" + k + i}>
                          {post.publishedAt.slice(0, 10)}
                        </p>
                        <div className="flex">
                          {post.categories &&
                            post.categories.map((cat, j) => (
                              <p
                                className="text-sm mx-1 text-blue-500 font-semibold hover:cursor-pointer hover:underline transition ease-in-out hover:scale-[1.05] "
                                key={"post-categories" + post.title + j}
                              >
                                {cat}
                                {j === post.categories.length - 1 ? (
                                  ""
                                ) : (
                                  <span>,</span>
                                )}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          {sliderControl(true)}
          {sliderControl(false)}
          <div className=" absolute bottom-0 flex justify-center left-0 right-0">
            {showPageNumber ? (
              <p className="font-semibold text-xl text-blue-500">{`${
                currentPage + 1
              }/${numOfPages}`}</p>
            ) : (
              pageArr &&
              pageArr.map((page, i) =>
                i === currentPage ? (
                  <button
                    key={"button-postslider" + page + i}
                    onClick={() => scrollToPage(i)}
                  >
                    <BsDiamondFill className="width-4 height-4 text-gray opacity-70 z-10 mx-2 mb-1 hover:text-blue-500 scale-[1.3]" />
                  </button>
                ) : (
                  <button
                    key={"button-postslider" + page + i}
                    onClick={() => scrollToPage(i)}
                  >
                    <BsDiamond className="width-4 height-4 text-gray opacity-70 z-10 mx-2 mb-1 hover:text-blue-500 transition ease-in-out hover:scale-[1.3] duration-100" />
                  </button>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
