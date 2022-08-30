import React from "react";

export default function PageTitle(props) {
  return (
    <div className="w-full h-32 flex justify-center items-center">
      <h1 className="text-2xl sm:text-3xl font-medium">{props.text}</h1>
    </div>
  );
}
