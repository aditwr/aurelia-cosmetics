import React from "react";

export default function SeeAllButton(props) {
  return (
    <a
      href="somewhere"
      className={
        "text-sm px-10 py-2 border-2 border-palleteTenderness " + props.addClass
      }
    >
      SEE ALL
    </a>
  );
}
