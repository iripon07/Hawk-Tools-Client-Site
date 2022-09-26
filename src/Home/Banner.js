import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import cv1 from "../images/cover/cv1.jpg";
import cv2 from "../images/cover/cv2.jpg";
import cv3 from "../images/cover/cv3.jpg";
import cv4 from "../images/cover/cv4.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          color: "green",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="">
            <img
              className="object-cover bg-top md:h-[500px]  lg:h-[500px]  w-full"
              src={cv1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="">
            <img
              className="object-cover bg-top md:h-[400px]  lg:h-[500px]  w-full"
              src={cv2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="">
            <img
              className="object-cover bg-top md:h-[400px]  lg:h-[500px]  w-full"
              src={cv3}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="">
            <img
              className="object-cover bg-top md:h-[400px]  lg:h-[500px]  w-full"
              src={cv4}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
