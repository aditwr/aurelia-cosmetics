import React from "react";

import bagHeart from "./../assets/img/about/advantages/bag-heart-fill.svg";

export default function Advantages(props) {
  return (
    <div className="w-full h-56 text-center bg-palleteFreshness py-4">
      <div className="w-full h-24 flex">
        <img
          src={props.img}
          alt="bag-heart"
          className="w-16 m-auto opacity-60"
        />
      </div>
      <div className="px-4">
        <h3 className="font-semibold text-xl mb-2">{props.title}</h3>
        <p className="text-sm text-slate-600">{props.description}</p>
      </div>
    </div>
  );
}
