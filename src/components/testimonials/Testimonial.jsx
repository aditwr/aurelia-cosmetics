import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// stylesheet import
import "swiper/css";
import "swiper/css/pagination";

// img
import costumer1 from "./../../assets/img/testimonials/costumer-1.png";
import costumer2 from "./../../assets/img/testimonials/costumer-2.png";
import costumer3 from "./../../assets/img/testimonials/costumer-3.png";
import costumer4 from "./../../assets/img/testimonials/costumer-4.png";
import costumer5 from "./../../assets/img/testimonials/costumer-5.png";

class Testimonial extends Component {
  render() {
    return (
      <div className="w-[600px] sm:w-full sm:px-5 lg:px-0 lg:w-[1200px] mx-auto -translate-x-[132px] sm:translate-x-0">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{ dynamicBullets: true }}
          grabCursor={true}
          breakpoints={{
            640: {
              centeredSlides: false,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              centeredSlides: false,
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="pt-6 pb-10">
              <div className="w-full bg-white rounded-xl shadow-xl py-10">
                <div className="flex flex-col items-center">
                  <div className="flex w-4/12 aspect-square rounded-full border-2 border-palleteBase border-opacity-70">
                    <img src={costumer1} alt="cosmetic costumer" className="" />
                  </div>
                  <h5 className="font-semibold text-lg mt-2">Freida Varnes</h5>
                  <p className="font-medium opacity-80">Model</p>
                </div>
                <div className="px-4 text-left mt-6">
                  <p className="opacity-80">
                    "I'm loving my new cosmetics line! The colors are so
                    beautiful and the quality is amazing. I've already gotten so
                    many compliments."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 pb-10">
              <div className="w-full bg-white rounded-xl shadow-xl py-10">
                <div className="flex flex-col items-center">
                  <div className="flex w-4/12 aspect-square rounded-full border-2 border-palleteBase border-opacity-70">
                    <img src={costumer3} alt="cosmetic costumer" className="" />
                  </div>
                  <h5 className="font-semibold text-lg mt-2">Tynisha Obey</h5>
                  <p className="font-medium opacity-80">Model</p>
                </div>
                <div className="px-4 text-left mt-6">
                  <p className="opacity-80">
                    "I'm loving my new cosmetics line! The colors are so
                    beautiful and the quality is amazing. I've already gotten so
                    many compliments." "I'm loving my new cosmetics line! The
                    colors are so beautiful and the quality is amazing."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 pb-10">
              <div className="w-full bg-white rounded-xl shadow-xl py-10">
                <div className="flex flex-col items-center">
                  <div className="flex w-4/12 aspect-square rounded-full border-2 border-palleteBase border-opacity-70">
                    <img src={costumer2} alt="cosmetic costumer" className="" />
                  </div>
                  <h5 className="font-semibold text-lg mt-2">Rochel Foose</h5>
                  <p className="font-medium opacity-80">Colleager</p>
                </div>
                <div className="px-4 text-left mt-6">
                  <p className="opacity-80">
                    "I'm loving my new cosmetics line! The colors are so
                    beautiful and the quality is amazing. I've already gotten so
                    many compliments."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 pb-10">
              <div className="w-full bg-white rounded-xl shadow-xl py-10">
                <div className="flex flex-col items-center">
                  <div className="flex w-4/12 aspect-square rounded-full border-2 border-palleteBase border-opacity-70">
                    <img src={costumer4} alt="cosmetic costumer" className="" />
                  </div>
                  <h5 className="font-semibold text-lg mt-2">Roselle Ehrman</h5>
                  <p className="font-medium opacity-80">Model</p>
                </div>
                <div className="px-4 text-left mt-6">
                  <p className="opacity-80">
                    "I'm loving my new cosmetics line! The colors are so
                    beautiful and the quality is amazing. I've already gotten so
                    many compliments."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 pb-10">
              <div className="w-full bg-white rounded-xl shadow-xl py-10">
                <div className="flex flex-col items-center">
                  <div className="flex w-4/12 aspect-square rounded-full border-2 border-palleteBase border-opacity-70">
                    <img src={costumer5} alt="cosmetic costumer" className="" />
                  </div>
                  <h5 className="font-semibold text-lg mt-2">Mezei Ágnes</h5>
                  <p className="font-medium opacity-80">Model</p>
                </div>
                <div className="px-4 text-left mt-6">
                  <p className="opacity-80">
                    "I'm loving my new cosmetics line! The colors are so
                    beautiful and the quality is amazing. I've already gotten so
                    many compliments." "I'm loving my new cosmetics line! The
                    colors are so beautiful and the quality is amazing."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Testimonial;
