import { useState, useRef, createRef, useEffect } from "react";
import {
  BsCaretLeft,
  BsCaretRight,
  BsDiamond,
  BsDiamondFill,
} from "react-icons/bs";

let p1 = {
  postImage:
    "https://images.unsplash.com/photo-1442499470257-b9d4da617f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  author: "Lucas",
  title: "This is a catchy title",
  body: "a lot of body stuff is going here.. maybe about 50 words or even more",
  date: "21/12/2022",
  categories: ["cat-1", "cat-2"],
};

//console.log(`viewport width: ${document.documentElement.clientWidth}`)

let posts = [
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
  [p1],
];

export default function PostSlider({ showPageNumber }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [numPerPage, setNumPerPage] = useState(3);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let tempNumPerPage =
        Math.floor(window.innerWidth / 400) == 0
          ? 1
          : Math.floor(window.innerWidth / 400);
      setNumPerPage(tempNumPerPage);
    });
  }, []);

  const pageArr =
    posts &&
    posts.reduce((arr, p, i) => {
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
    setTouchPosition(null);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const numOfPages = pageArr.length;

  const nextPage = () => {
    if (currentPage >= numOfPages - 1) {
      scrollToPage(0);
    } else {
      scrollToPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage === 0) {
      scrollToPage(numOfPages - 1);
    } else {
      scrollToPage(currentPage - 1);
    }
  };

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousPage : nextPage}
      className={`absolute text-gray z-10 h-15 w-15 flex items-center justify-center bottom-0 top-0 ${
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
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextPage();
    }

    if (diff < -5) {
      previousPage();
    }
  };

  return (
    <div className="flex justify-center w-screen md:w-3/4 items-center bg-white">
      <div className="relative w-full pb-8">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="w-full inline-flex overflow-hidden snap-x snap-mandatory"
        >
          {pageArr &&
            pageArr.map((postChunk, i) => (
              <div
                className="w-full h-full flex-shrink-0 flex px-8 py-4"
                key={"postChunk" + i}
                ref={refs[i]}
              >
                {postChunk &&
                  postChunk.map((post, k) => (
                    <div className="h-full w-auto bg-white mx-8 shadow-xl flex flex-col text-center px-4 py-4">
                      <div className="" key={"post-image" + k + i}>
                        <img
                          className="object-cover mx-auto"
                          src={post.postImage}
                        />
                      </div>
                      <h3
                        className="mt-4 mb-2 font-bold"
                        key={"post-title" + k + i}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm" key={"post-author" + k + i}>
                        {"by " + post.author}
                      </p>
                      <p className="my-2" key={"post-body" + k + i}>
                        {post.body}
                      </p>
                      <button className="mb-6 mt-2 transition ease-in-out hover:scale-[1.1] active:scale-[1.1] duration-200 text-sm bg-transparent my-auto hover:bg-blue-500 text-blue-700 font-semibold w-32 mx-auto hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded">
                        Read More...
                      </button>
                      <div
                        id="meta"
                        className="flex justify-between italic mb-0 mt-auto"
                      >
                        <p className="text-sm" key={"post-date" + k + i}>
                          {post.date}
                        </p>
                        <div className="flex">
                          {post.categories &&
                            post.categories.map((cat, j) => (
                              <p
                                className="text-sm mx-1 text-blue-500 font-semibold"
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
              <p className="font-semibold text-lg">{`${
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
