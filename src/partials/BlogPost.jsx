import React from "react";
import ButtonOutline from "../components/input/ButtonOutline";

import img1 from "./../assets/img/popular-product/product-1.png";

export default function BlogPost() {
  return (
    <div className="py-4">
      {/* main */}
      <div className="md:flex ">
        {/* image-container */}
        <div className="md:basis-3/12 w-full aspect-video md:aspect-square flex">
          <img
            src={img1}
            alt="cosmetics post"
            className="w-full object-cover object-center"
          />
        </div>

        {/* post-text-content */}
        <div className="md:basis-9/12 py-4 md:py-0 md:pl-4 md:flex md:items-center">
          <div className="">
            <p className="text-xs font-medium opacity-90">
              Hair | Desember 12, 2022
            </p>
            <h5 className="text-lg font-medium">Lorem ipsum dolor sit amet.</h5>
            <p className="text-sm opacity-80 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda id odit ratione perspiciatis quam tempore ullam...
            </p>
            <ButtonOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
