import React from "react";

import locationIcon from "./../../assets/img/icons/contact/geo-alt-fill.svg";
import phoneIcon from "./../../assets/img/icons/contact/telephone-fill.svg";
import emailIcon from "./../../assets/img/icons/contact/envelope-fill.svg";

export default function ContactBoxInfo() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-6">
      <div className="w-full h-56 bg-[rgba(0,0,0,.05)] text-center px-4">
        {/* location */}
        <div className="w-full h-28 flex">
          <img
            src={locationIcon}
            alt=""
            className="w-12 h-auto m-auto opacity-80"
          />
        </div>
        <h5 className="font-semibold text-lg mb-1">Location</h5>
        <p className="opacity-90">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
      </div>
      <div className="w-full h-56 bg-[rgba(0,0,0,.05)] text-center px-4">
        {/* location */}
        <div className="w-full h-28 flex">
          <img
            src={phoneIcon}
            alt=""
            className="w-12 h-auto m-auto opacity-80"
          />
        </div>
        <h5 className="font-semibold text-lg mb-1">Phone</h5>
        <p className="opacity-90">(808) 555-0111</p>
      </div>
      <div className="w-full h-56 bg-[rgba(0,0,0,.05)] text-center px-4">
        {/* location */}
        <div className="w-full h-28 flex">
          <img
            src={emailIcon}
            alt=""
            className="w-12 h-auto m-auto opacity-80"
          />
        </div>
        <h5 className="font-semibold text-lg mb-1">Email</h5>
        <p className="opacity-90">jessica.hanson@example.com</p>
      </div>
    </div>
  );
}
