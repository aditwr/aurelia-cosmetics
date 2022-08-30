import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import BoxSliderItem01 from "./BoxSliderItem01";

import "swiper/css";
import "swiper/css/pagination";

import img from "./../../assets/img/popular-product/product-1.png";

class BoxSlider extends Component {
  render() {
    return (
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={12}
          pagination={{ dynamicBullets: true }}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          className=""
        >
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder " />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder " />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder " />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder " />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder " />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={img} text="Powder " />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default BoxSlider;
