import React from "react";

export default function TeamSliderItem(props) {
  return (
    <div className="w-full text-center pb-12">
      <div className="w-full aspect-square flex bg-slate-200">
        <img src={props.img} alt="team of aurelia cosmetics" className="" />
      </div>
      <h5 className="mt-2 font-medium">{props.name}</h5>
      <p className="text-sm text-slate-500">{props.job}</p>
    </div>
  );
}
