import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { assets } from "../assets/assets";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={assets.slide_1}
            alt="Slide 2"
            style={{ width: "1350px", height: "535px" }}
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assets.slide_3}
            alt="Slide 2"
            style={{ width: "1350px", height: "535px" }}
            className="swiper-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assets.slide_2}
            alt="Slide 2"
            style={{ width: "1350px", height: "535px" }}
            className="swiper-slide-image"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
