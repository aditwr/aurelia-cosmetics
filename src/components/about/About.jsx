import React, { Component } from "react";

// image
import about from "./../../assets/img/about/about.png";

class About extends Component {
  render() {
    return (
      <div className="mt-20 py-24 bg-palleteDensity">
        {/* container */}
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto relative">
          <div className="mobile-title text-left px-4 md:hidden">
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl -translate-y-4">
              About Aurelia Cosmetics
            </h3>
          </div>
          <div className="flex w-full h-[320px] lg:h-[400px] md:w-[320px] lg:w-[400px] box-border relative md:static z-10 overflow-hidden md:overflow-visible shadow-lg md:shadow-xl transition-all">
            <img
              src={about}
              alt=""
              className="object-cover w-full object-top md:relative md:z-20 transition-all"
            />
            {/* about-text */}
            <div className="absolute md:right-5 bg-[rgba(255,255,255,.6)] text-left w-full md:w-11/12 h-full md:h-[280px] lg:h-[260px] mt-32 sm:mt-48 md:mt-5 lg:mt-16 py-2 md:pt-4 lg:pt-8 px-4 md:pl-[320px] lg:pl-[360px] md:shadow-md transition-all">
              <h3 className="hidden md:block font-bold text-lg md:text-xl lg:text-2xl md:mb-3">
                About Aurelia Cosmetics
              </h3>
              <p className="lg:w-10/12 text-sm sm:text-base sm:opacity-90 md:text-base md:mb-3 lg:mb-6">
                Welcome to aurelia cosmetics. We are a company that specializes
                in natural and organic cosmetics. Our products are made with the
                highest quality ingredients and are never tested on animals. We
                believe that everyone deserves to look and feel their best, so
                we offer a wide range of products to suit every need.
              </p>
              <a
                href="example.com"
                className="absolute md:static -top-28 sm:-top-44 right-4 text-sm md:text-base md:font-semibold md:opacity-80 underline "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
