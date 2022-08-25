import anime from "animejs";
import React, { Component } from "react";

// img
import brand1 from "./../../../assets/img/hero/brand-1.png";
import brand2 from "./../../../assets/img/hero/brand-2.png";
import brand3 from "./../../../assets/img/hero/brand-3.png";
import brand4 from "./../../../assets/img/hero/brand-4.png";

export default class StockBrands extends Component {
  componentDidMount() {
    let timeline = anime.timeline({});
    timeline
      .add({
        targets: ".title",
        opacity: 1,
        duration: 1000,
      })
      .add({
        targets: ".brand-container",
        width: "100%",
        easing: "linear",
      })
      .add({
        targets: ".brand",
        opacity: 1,
        duration: 2000,
        delay: function (element, index, length) {
          return index * 200;
        },
      });
  }
  render() {
    return (
      <>
        <div className="pt-12 pb-6 overflow-hidden">
          <h3 className="inline-block title text-lg md:text-xl lg:text-2xl font-lato font-bold opacity-0">
            Stock Brand Cosmetics
          </h3>
        </div>
        <section className="brand-container w-0 mx-auto px-5 lg:px-0 flex items-center justify-center h-[86px] lg:h-[108px] bg-palleteDensity">
          <div className="flex w-full sm:w-[320px] lg:w-[420px] justify-between h-[56px] lg:h-[72px]">
            <img
              src={brand1}
              alt="cosmetic brand"
              className="brand h-full opacity-0"
            />
            <img
              src={brand2}
              alt="cosmetic brand"
              className="brand h-full opacity-0"
            />
            <img
              src={brand3}
              alt="cosmetic brand"
              className="brand h-full opacity-0"
            />
            <img
              src={brand4}
              alt="cosmetic brand"
              className="brand h-full opacity-0"
            />
          </div>
        </section>
      </>
    );
  }
}
