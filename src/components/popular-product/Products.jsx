import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper";

// css import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// image
import product1 from "./../../assets/img/popular-product/product-1.png";
import product2 from "./../../assets/img/popular-product/product-2.png";
import product3 from "./../../assets/img/popular-product/product-3.png";
import product4 from "./../../assets/img/popular-product/product-4.png";
import product5 from "./../../assets/img/popular-product/product-5.png";
import product6 from "./../../assets/img/popular-product/product-6.png";

class Products extends Component {
  render() {
    return (
      <div className="md:mt-6 lg:mt-8 sm:px-5 lg:px-0 lg:w-[1200px] mx-auto">
        <Swiper
          modules={[Navigation, EffectCoverflow, Pagination]}
          slidesPerView={2}
          spaceBetween={12}
          navigation={true}
          centeredSlides={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              centeredSlides: false,
              slidesPerView: 3,
              spaceBetween: 20,
              effect: "slide",
            },
            768: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 20,
              effect: "slide",
            },
            1024: {
              modules: [Navigation, EffectCoverflow, Pagination],
              centeredSlides: false,
              slidesPerView: 5,
              spaceBetween: 20,
              grabCursor: true,
              effect: "slide",
              pagination: true,
            },
          }}
        >
          <SwiperSlide>
            <div className="">
              <div className="aspect-[1/1.125] flex overflow-hidden">
                <img
                  src={product1}
                  alt="cosmetic product"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <p className="mt-2 font-medium text-base">$50.00</p>
                <h5 className="mt-2 font-semibold text-base">Oil Serum</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="aspect-[1/1.125] flex overflow-hidden">
                <img
                  src={product2}
                  alt="cosmetic product"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <p className="mt-2 font-medium text-base">$39.00</p>
                <h5 className="mt-2 font-semibold text-base">Hair Mask</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="aspect-[1/1.125] flex overflow-hidden">
                <img
                  src={product3}
                  alt="cosmetic product"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <p className="mt-2 font-medium text-base">$59.00</p>
                <h5 className="mt-2 font-semibold text-base">Lipstick</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="aspect-[1/1.125] flex overflow-hidden">
                <img
                  src={product4}
                  alt="cosmetic product"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <p className="mt-2 font-medium text-base">$290.00</p>
                <h5 className="mt-2 font-semibold text-base">
                  Cosmetics Pack I
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="aspect-[1/1.125] flex overflow-hidden">
                <img
                  src={product5}
                  alt="cosmetic product"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <p className="mt-2 font-medium text-base">$45.00</p>
                <h5 className="mt-2 font-semibold text-base">Mascara</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="aspect-[1/1.125] flex overflow-hidden">
                <img
                  src={product6}
                  alt="cosmetic product"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="text-center">
                <p className="mt-2 font-medium text-base">$49.00</p>
                <h5 className="mt-2 font-semibold text-base">Powder</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Products;
