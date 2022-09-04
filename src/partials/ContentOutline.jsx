import React from "react";

export default function ContentOutline(props) {
  return (
    <div
      className={
        "border-2 py-1 text-center text-sm border-palleteTenderness " +
        props.addClass
      }
    >
      <p className="font-medium">{props.text}</p>
    </div>
  );
}
