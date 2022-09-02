import React from "react";

export default function ButtonSecondary(props) {
  return (
    <button className={" " + props.addClass}>
      <span className="inline-block px-3 py-2 bg-palleteTenderness text-sm font-medium">
        {props.text}
      </span>
    </button>
  );
}
