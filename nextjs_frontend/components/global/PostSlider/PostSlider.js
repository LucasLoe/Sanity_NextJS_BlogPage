import { useState, useRef, createRef } from "react";
import { BsCaretLeft, BsCaretRight, BsDiamond, BsDiamondFill } from "react-icons/bs";

export default function Carousel({ width = 'half', numPerPage = 3 }) {

    let p1 = {
        author: "Lucas",
        body: "a lot of body stuff is going here.. maybe about 50 words or even more",
        date: "21/12/2022",
        categories: ["cat-1", "cat-2"]
    }

    let posts = [[p1], [p1], [p1], [p1], [p1], [p1], [p1], [p1], [p1], [p1], [p1], [p1]]

    const [currentPage, setCurrentPage] = useState(0);

    const pageArr = posts && posts.reduce((arr, p, i) => {
        const chunk = Math.floor(i / numPerPage);
        arr[chunk] = [].concat((arr[chunk] || []), p);
        return arr
    }, [])

    console.log(pageArr)

    const refs = pageArr && pageArr.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
    }, {});

    // console.log(pageArr)

    const scrollToPage = (i) => {
        setCurrentPage(i);
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
            className={`absolute text-white z-10 h-15 w-15 flex items-center justify-center bottom-0 top-0 ${isLeft ? "left-2" : "right-2"
                }`}
        >
            <span role="post" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
                {isLeft ? (
                    <BsCaretLeft className="hover:text-blue-100 h-10 w-10 opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
                ) : (
                    <BsCaretRight className="hover:text-blue-100 h-10 w-10 opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
                )}
            </span>
        </button>
    );

    return (
        <div className="flex justify-center w-screen md:w-1/2 items-center bg-slate-200">
            <div className="relative w-full">
                <div className="w-full inline-flex overflow-hidden snap-x snap-mandatory">
                    {
                        pageArr && pageArr.map((postChunk, i) => (
                            <div className="w-full h-full flex-shrink-0 flex px-8 py-4" key={"postChunk" + i} ref={refs[i]}>
                                {
                                    postChunk && postChunk.map((post, k) => (
                                        <div className="h-64 w-64 bg-white mx-8  border-red-500 border-4">
                                            <div key={"post-author" + k + i} >{post.author}</div>
                                            <div key={"post-body" + k + i} >{post.body}</div>
                                            <div key={"post-date" + k + i} >{post.date}</div>

                                        </div>

                                    ))
                                }
                            </div>
                        ))
                    }
                    {sliderControl(true)}
                    {sliderControl(false)}
                    <div className=" absolute bottom-0 flex justify-center left-0 right-0">
                        {
                            pageArr && pageArr.map((post, i) => (
                                (i === currentPage) ?
                                    <button key={'button-postslider' + post.toString()} onClick={() => scrollToPage(i)}>
                                        <BsDiamondFill className="width-4 height-4 text-white opacity-70 z-10 mx-2 mb-4 hover:text-blue-100 scale-[1.3]" />
                                    </button>
                                    :
                                    <button key={'button-postslider' + post.toString()} onClick={() => scrollToPage(i)}>
                                        <BsDiamond className="width-4 height-4 text-white opacity-70 z-10 mx-2 mb-4 hover:text-blue-100 transition ease-in-out hover:scale-[1.3] duration-100" />
                                    </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
