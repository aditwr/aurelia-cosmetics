import React from "react";

export default function ButtonOutline(props) {
  return (
    <button
      className={
        "px-3 py-1 border-2 border-palleteTenderness font-montserrat text-xs font-medium " +
        props.addClass
      }
    >
      Read More
    </button>
  );
}
