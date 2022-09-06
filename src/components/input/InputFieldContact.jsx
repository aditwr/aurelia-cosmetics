import React from "react";

export default function InputFieldContact(props) {
  return (
    <input
      type="text"
      name={props.name}
      id={props.name}
      className={"w-full bg-white h-10 px-3 border " + props.addClass}
      placeholder={props.placeholder}
    />
  );
}
