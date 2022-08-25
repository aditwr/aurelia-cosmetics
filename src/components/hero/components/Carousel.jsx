import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

// img
import carouselBg from "./../../../assets/img/hero/carousel-bg.png";
import carouselMainImg from "./../../../assets/img/hero/carousel-main-img.png";
import Particle from "./Particles";

export default class Carousel extends Component {
  render() {
    return (
      <div
        id="carousel"
        className="h-[588px] pt-16 bg-palleteFreshness relative overflow-hidden z-0"
      >
        <Particle />
        {/* container */}
        <div className="px-5 lg:px-0 pt-6 lg:w-[1200px] lg:mx-auto text-left relative z-20">
          <div className="lg:w-7/12 md:pt-4 lg:pt-16">
            <h1 className="text-3xl lg:text-[40px] font-bold font-lato mb-6 leading-tight">
              Young cosmetics always with you, use best skin care products to
              change your life.
            </h1>
            <p className="w-10/12 md:w-8/12 text-base font-medium font-montserrat mb-8 text-slate-700">
              Young cosmetics base on skin care, so it make you feel your skin
              are most comfortable
            </p>
            <a
              href="example.com"
              className="font-montserrat font-semibold text-slate-800 px-3 py-2 bg-palleteTenderness"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
              SHOP NOW
            </a>
          </div>
          {/* main-img */}
          <img
            src={carouselMainImg}
            alt="cosmetics"
            className="absolute z-0 right-0 top-0 md:bottom-0 w-48 sm:w-64 md:w-80 lg:w-[460px] translate-y-[324px] sm:translate-y-[240px] md:translate-y-[196px] lg:translate-y-[46px] md:-translate-x-[16%] lg:translate-x-0 transition-all"
          />
          {/* rectangle */}
          <div className="w-[690px] lg:w-[800px] h-96 lg:h-[436px] bg-white -rotate-[58deg] -z-10 absolute right-0 top-0 translate-x-[68%] sm:translate-x-[50%] md:translate-x-[32%] lg:translate-x-[214px] translate-y-[16%] md:translate-y-0 lg:-translate-y-[24px] transition-all shadow-xl"></div>
        </div>
        {/* acsent-img */}
        <img
          src={carouselBg}
          alt="aurelia cosmetics"
          className="absolute -bottom-12 -left-20 w-60 sm:w-80 md:w-96 lg:w-[480px] sm:-translate-x-8 md:-translate-x-16 sm:translate-y-4 md:translate-y-16 opacity-30 lg:opacity-20 transition-all"
        />
      </div>
    );
  }
}
