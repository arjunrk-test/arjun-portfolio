"use client";

import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
   const swiper = useSwiper();
   return(
      <div className={containerStyles}>
         <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <FaArrowLeft className={iconStyles}/>
         </button>
         <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <FaArrowRight className={iconStyles}/>
         </button>
      </div>
   );
};

export default WorkSliderBtns;