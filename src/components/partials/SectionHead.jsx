import React, { Component } from "react";
import SeeAllButton from "./SeeAllButton";

export default class SectionHead extends Component {
  render() {
    return (
      <div
        className={
          "w-full h-auto my-4 md:flex relative text-left " + this.props.addClass
        }
      >
        <div className="md:basis-8/12 ">
          <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
            {this.props.title}
          </h3>
          <p className=" text-slate-600 xl:text-lg">{this.props.subtitle}</p>
        </div>
        <div className="mt-8">
          <SeeAllButton addClass="hidden md:block md:absolute md:right-0 md:bottom-0" />
        </div>
      </div>
    );
  }
}
