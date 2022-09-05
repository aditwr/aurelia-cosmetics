import React from "react";

import img1 from "./../assets/img/popular-product/product-5.png";

export default function SmallPost() {
  return (
    <div className="w-full mb-4">
      <div className="w-full flex">
        <div className="basis-4/12 md:basis-3/12 w-full h-28 flex">
          <img
            src={img1}
            alt="post-img"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="basis-8/12 md:basis-9/12 pl-3 flex flex-col justify-center">
          <h5 className="font-medium">Lorem ipsum dolor sit amet.</h5>
          <p className="text-xs font-medium mb-1 opacity-90">
            Lipstick | 12 Agustus 2022
          </p>
          <p className="text-sm opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            explicabo eos magnam...
          </p>
        </div>
      </div>
    </div>
  );
}
