import React from "react";

export default function SeeAllButton(props) {
  return (
    <a
      href="somewhere"
      className={
        "inline-block font-montserrat relative text-sm px-10 py-2 border-2 border-palleteTenderness group " +
        props.addClass
      }
    >
      <p className="group-hover:relative z-30 group-hover:text-white transition-all duration-500 font-medium">
        SEE ALL
      </p>
      <div className="absolute flex top-0 left-0 w-0 h-full bg-palleteTenderness transition-all duration-500 group-hover:w-full"></div>
    </a>
  );
}
