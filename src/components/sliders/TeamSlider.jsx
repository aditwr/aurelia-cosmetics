import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import TeamSliderItem from "./TeamSliderItem";
import { Pagination } from "swiper";

import person from "./../../assets/img/about/about.png";

class TeamSlider extends Component {
  render() {
    return (
      <div className="mb-16">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
          <SwiperSlide>
            <TeamSliderItem img={person} name="Angelina Elvis" job="Designer" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default TeamSlider;
