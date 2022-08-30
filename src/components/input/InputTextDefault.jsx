import React from "react";

export default function InputTextDefault(props) {
  return (
    <input
      type="text"
      name=""
      id="search-keyword"
      className={
        "flex-grow bg-white border h-8 md:h-10 focus:outline-none px-2 md:px-4 text-slate-600 focus:border-palleteFreshness " +
        props.addClass
      }
    />
  );
}
