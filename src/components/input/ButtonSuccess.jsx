import React from "react";

export default function ButtonSuccess(props) {
  return (
    <button
      type="submit"
      className={
        "text-sm md:text-base font-medium px-3 md:px-5 bg-palleteFreshness tracking-wide " +
        props.addClass
      }
    >
      {props.text}
    </button>
  );
}
