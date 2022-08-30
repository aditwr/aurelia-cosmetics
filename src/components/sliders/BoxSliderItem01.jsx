import React from "react";

export default function BoxSliderItem01(props) {
  return (
    <div className="w-full pb-10">
      <div className="flex aspect-square relative">
        <img
          src={props.img}
          alt="product cosmetics"
          className="w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="w-full h-full bg-[rgba(0,0,0,.5)] flex">
            <p className="m-auto font-medium text-white text-center">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
