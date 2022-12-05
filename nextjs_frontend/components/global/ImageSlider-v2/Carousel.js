import { useState, useRef, createRef } from "react";
import { BsCaretLeftSquare, BsCaretRightSquare } from "react-icons/bs";

const images = [
  "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`absolute text-white z-10 h-15 w-15 flex items-center justify-center bottom-0 top-0 ${
        isLeft ? "left-2" : "right-2"
      }`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? (
          <BsCaretLeftSquare className="hover:text-blue-100 h-10 w-10 opacity-70" />
        ) : (
          <BsCaretRightSquare className="hover:text-blue-100 h-10 w-10 opacity-70" />
        )}
      </span>
    </button>
  );

  return (
    <div className="flex justify-center w-screen md:w-1/2 h-[500px] items-center shadow-lg">
      <div className="relative w-full h-full">
        <div className="carousel h-full inline-flex overflow-hidden snap-x snap-mandatory">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className=" object-cover" />
            </div>
          ))}
          {sliderControl(false)}
        </div>
      </div>
    </div>
  );
}
