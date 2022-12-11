import { useState, useRef, createRef } from "react";
import {
  BsCaretLeft,
  BsCaretRight,
  BsDiamond,
  BsDiamondFill,
} from "react-icons/bs";

export default function Carousel({ width = "half", images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const refs =
    images &&
    images.reduce((acc, val, i) => {
      acc[i] = createRef();
      return acc;
    }, {});

  // console.log(images)

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
          <BsCaretLeft className="hover:text-blue-100 h-10 w-10 opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
        ) : (
          <BsCaretRight className="hover:text-blue-100 h-10 w-10 opacity-70 transition ease-in-out hover:scale-[1.2] duration-100" />
        )}
      </span>
    </button>
  );

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-full h-full ">
        <div className="carousel inline-flex overflow-hidden snap-x snap-mandatory w-full h-full">
          {images &&
            images.map((img, i) => (
              <div
                className="w-full h-full flex-shrink-0"
                key={img}
                ref={refs[i]}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          {sliderControl(true)}
          {sliderControl(false)}
          <div className=" absolute bottom-0 flex justify-center left-0 right-0">
            {images &&
              images.map((img, i) =>
                i === currentImage ? (
                  <button
                    key={"button-" + img.toString()}
                    onClick={() => scrollToImage(i)}
                  >
                    <BsDiamondFill className="width-4 height-4 text-white opacity-70 z-10 mx-2 mb-4 hover:text-blue-100 scale-[1.3]" />
                  </button>
                ) : (
                  <button
                    key={"button-" + img.toString()}
                    onClick={() => scrollToImage(i)}
                  >
                    <BsDiamond className="width-4 height-4 text-white opacity-70 z-10 mx-2 mb-4 hover:text-blue-100 transition ease-in-out hover:scale-[1.3] duration-100" />
                  </button>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
