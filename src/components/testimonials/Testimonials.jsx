import React, { Component, Fragment } from "react";
import SectionHead from "../partials/SectionHead";
import Testimonial from "./Testimonial";

class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        {/* container */}
        {/* <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto mt-32">
          <div className={"w-full h-auto my-4 md:flex relative text-left "}>
            <div className="md:basis-8/12 ">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
                Testimonials
              </h3>
              <p className=" text-slate-600 xl:text-lg">
                Don't just take our word for it, see what our customers have to
                say about our cosmetics!
              </p>
            </div>
          </div>
        </div> */}
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto mt-32">
          <SectionHead
            title="Testimonials"
            subtitle="Don't just take our word for it, see what our customers have to
                say about our cosmetics!"
          />
        </div>
        <Testimonial />
      </Fragment>
    );
  }
}

export default Testimonials;
