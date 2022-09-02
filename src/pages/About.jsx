import React, { Component } from "react";
import ButtonSecondary from "../components/input/ButtonSecondary";
import PageTitle from "../partials/PageTitle";
import Categories from "./../components/shop-by-categories/Categories";
import SectionHead from "./../partials/SectionHead";

import aboutImage from "./../assets/img/about/about.png";
import TeamSlider from "../components/sliders/TeamSlider";
import Advantages from "../partials/Advantages";
import imgAdvantages1 from "./../assets/img/about/advantages/bag-heart-fill.svg";

class About extends Component {
  render() {
    return (
      <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto pt-16">
        <PageTitle text="About Us" />
        {/* flex */}
        <div className="flex flex-col lg:flex-row gap-y-8">
          {/* text */}
          <div className="lg:basis-2/3 lg:flex flex-col items-start justify-center">
            <h3 className="text-xl lg:text-2xl font-medium mb-2 lg:mb-3 text-palleteBase">
              Hello, <span className="lg:block">We Aurelia</span>
            </h3>
            <p className="text-slate-600 lg:w-8/12 lg:text-lg">
              Welcome to aurelia cosmetics. We are a company that specializes in
              natural and organic cosmetics. Our products are made with the
              highest quality ingredients and are never tested on animals. We
              believe that everyone deserves to look and feel their best, so we
              offer a wide range of products to suit every need.
            </p>
            <ButtonSecondary text="Read More" addClass="mt-4 lg:mt-6" />
          </div>

          {/* img */}
          <div className="lg:basis-1/3 order-first lg:-order-none w-full flex aspect-square sm:aspect-auto sm:h-96 lg:aspect-square lg:h-auto overflow-hidden">
            <img
              src={aboutImage}
              alt="about aurelia cosmetics"
              className="w-full object-cover sm:object-top"
            />
          </div>
        </div>

        {/* categories-section */}
        <div className="my-16">
          <Categories />
        </div>
        {/* our-team */}
        <div className="">
          <SectionHead
            title="Our Team"
            subtitle="This is our team in Aurelia Cosmetics. All of us is an professional in cosmetics products."
          />
          <TeamSlider />
        </div>
        {/* benefits */}
        <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-y-6 lg:gap-y-0 mb-16">
          <Advantages
            img={imgAdvantages1}
            title="Popular Brands"
            description="Our Store provide list of the best popular cosmetics brands, like
          Impora, Mustika Ratu, Sari Ayu, etc."
          />
          <Advantages
            img={imgAdvantages1}
            title="Popular Brands"
            description="Our Store provide list of the best popular cosmetics brands, like
          Impora, Mustika Ratu, Sari Ayu, etc."
          />
          <Advantages
            img={imgAdvantages1}
            title="Popular Brands"
            description="Our Store provide list of the best popular cosmetics brands, like
          Impora, Mustika Ratu, Sari Ayu, etc."
          />
        </div>
      </div>
    );
  }
}

export default About;
