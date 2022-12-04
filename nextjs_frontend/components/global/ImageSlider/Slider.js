import { useState, useEffect, useTransition, useRef } from 'react'
import SliderContent from './SliderContent'
import Image from 'next/image'


function Slider() {

  const [indexObj, setIndexObj] = useState({
    index: 0,
    indexShift: "0"
  })

  const transitionRef = useRef()

  let contentUrls = SliderContent(indexObj)

  useEffect(() => {
    contentUrls = SliderContent(indexObj)
  }, [indexObj]);

  function handleIndexChange(e) {
    if (e === '-1') {
      setIndexObj({
        index: indexObj.index - 1,
        indexShift: e
      })
    }
    else if (e === '+1') {
      setIndexObj({
        index: indexObj.index + 1,
        indexShift: e
      })
    }
  }

  function calcShift(i) {
    if (i === 0) {
      return "left-[-100vw]"
    }
    else if (i === 1) {
      return "left-[0vw]"
    }
    else if (i === 2) {
      return "left-[100vw]"
    }
    else {
      return "left-[0vw]"
    }
  }

  return (
    <div className='absolute h-80 w-screen margin-x-0 margin-y-auto flex box-border overflow-hidden'>
      {contentUrls && contentUrls.map((srcData, i) =>
        <Image
          className={`w-screen h-80 object-cover absolute transition transform active:translate-x-full duration-700 ease-in`}
          src={"/../public/assets/ImageSliderTest/" + srcData}
          key={i}
          alt="some alt content"
          width={1500}
          height={1500}
        />

      )}
      <button className="bg-white h-16 w-16 top-0 bottom-0 my-auto absolute left-0" onClick={() => handleIndexChange("-1")}>-1</button>
      <button className="bg-white h-16 w-16 top-0 bottom-0 my-auto absolute right-0" onClick={() => handleIndexChange("+1")}>+1</button>
    </div>
  )
}

export default Slider