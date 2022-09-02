import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import BoxSliderItem01 from "./BoxSliderItem01";

import "swiper/css";
import "swiper/css/pagination";

import product1 from "./../../assets/img/popular-product/product-1.png";
import product2 from "./../../assets/img/popular-product/product-2.png";
import product3 from "./../../assets/img/popular-product/product-3.png";
import product4 from "./../../assets/img/popular-product/product-4.png";
import product5 from "./../../assets/img/popular-product/product-5.png";
import product6 from "./../../assets/img/popular-product/product-6.png";

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
            <BoxSliderItem01 img={product6} text="Powder" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product5} text="Mascara" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product3} text="Lipstick" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product1} text="Oil Serum" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product2} text="Hair Mask" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product4} text="Glow Pack Cosmatics I" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product2} text="Hair Mask" />
          </SwiperSlide>
          <SwiperSlide>
            <BoxSliderItem01 img={product5} text="Mascara" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default BoxSlider;
