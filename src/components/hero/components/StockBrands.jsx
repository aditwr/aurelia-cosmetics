import React, { Component } from "react";

// img
import brand1 from "./../../../assets/img/hero/brand-1.png";
import brand2 from "./../../../assets/img/hero/brand-2.png";
import brand3 from "./../../../assets/img/hero/brand-3.png";
import brand4 from "./../../../assets/img/hero/brand-4.png";

export default class StockBrands extends Component {
  render() {
    return (
      <>
        <div className="pt-12 pb-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-lato font-bold">
            Stock Brand Cosmetics
          </h3>
        </div>
        <section className="px-5 lg:px-0 flex items-center justify-center h-[86px] lg:h-[108px] bg-palleteDensity">
          <div className="flex w-full sm:w-[320px] lg:w-[420px] justify-between h-[56px] lg:h-[72px]">
            <img src={brand1} alt="cosmetic brand" className="h-full" />
            <img src={brand2} alt="cosmetic brand" className="h-full" />
            <img src={brand3} alt="cosmetic brand" className="h-full" />
            <img src={brand4} alt="cosmetic brand" className="h-full" />
          </div>
        </section>
      </>
    );
  }
}
