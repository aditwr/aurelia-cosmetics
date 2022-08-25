import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// import stylesheet
import "swiper/css";
import "swiper/css/pagination";

// img
import news1 from "./../../assets/img/latest-news/news-1.png";

class News extends Component {
  render() {
    return (
      <div className="lg:px-0 w-[620px] sm:w-full lg:w-[1200px] mx-auto text-left -translate-x-[158px] sm:translate-x-0">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{ dynamicBullets: true }}
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className=""
        >
          <SwiperSlide>
            <div className="pb-12">
              <div className="w-full flex aspect-video">
                <img
                  src={news1}
                  alt="cosmetics news"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="">
                <h5 className="font-semibold mt-3">
                  Popular Lipstik for Young People in 2022
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="w-full flex aspect-video">
                <img
                  src={news1}
                  alt="cosmetics news"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="">
                <h5 className="font-semibold mt-3">
                  Popular Lipstik for Young People in 2022
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="w-full flex aspect-video">
                <img
                  src={news1}
                  alt="cosmetics news"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="">
                <h5 className="font-semibold mt-3">
                  Popular Lipstik for Young People in 2022
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="w-full flex aspect-video">
                <img
                  src={news1}
                  alt="cosmetics news"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="">
                <h5 className="font-semibold mt-3">
                  Popular Lipstik for Young People in 2022
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default News;
