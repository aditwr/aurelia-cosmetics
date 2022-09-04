import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination() {
  return (
    <div className="w-full flex justify-center mt-12">
      <div className="w-auto flex gap-x-2">
        {/* item */}
        <div className="w-8 h-8 bg-palleteFreshness border border-palleteFreshness flex">
          <p className="m-auto">1</p>
        </div>
        <div className="w-8 h-8 bg-white border flex">
          <p className="m-auto">2</p>
        </div>
        <div className="w-8 h-8 bg-white border flex">
          <p className="m-auto">3</p>
        </div>
        <div className="w-8 h-8 bg-white border flex">
          <p className="m-auto">4</p>
        </div>
        <div className="w-8 h-8 bg-white border flex">
          <p className="m-auto">
            <FontAwesomeIcon icon={faAngleRight} />
          </p>
        </div>
      </div>
    </div>
  );
}
