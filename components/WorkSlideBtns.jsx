"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"


const WorkSlideBtns = ({containerStyles, btnStyles, IconsStyles}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={IconsStyles} onClick={()=> swiper.slidePrev()}/>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={IconsStyles} onClick={()=> swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSlideBtns
