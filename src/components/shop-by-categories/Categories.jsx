import React, { Component } from "react";
import category1 from "./../../assets/img/shop-by-categories/category-1.png";
import category2 from "./../../assets/img/shop-by-categories/category-2.png";
import category3 from "./../../assets/img/shop-by-categories/category-3.png";
import category4 from "./../../assets/img/shop-by-categories/category-4.png";

class Categories extends Component {
  render() {
    return (
      <div className={"w-full " + this.props.addClass}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="aspect-square lg:col-span-2 lg:row-span-2 bg-slate-300 relative group overflow-hidden flex">
            <img
              src={category1}
              alt="cosmetics"
              className="object-cover w-full object-center"
            />
            {/* cover element */}
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[rgba(241,245,249,.5)] flex justify-center items-center transition-opacity">
              <p className="hidden group-hover:block px-8 py-2 bg-palleteTenderness text-sm md:text-base font-medium font-montserrat">
                Skin Serum
              </p>
            </div>
          </div>

          <div className="aspect-square bg-slate-300 relative group overflow-hidden flex">
            <img
              src={category2}
              alt="cosmetics"
              className="object-cover w-full object-center"
            />
            {/* cover element */}
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[rgba(241,245,249,.5)] flex justify-center items-center transition-opacity">
              <p className="hidden group-hover:block px-8 py-2 bg-palleteTenderness text-sm md:text-base font-medium font-montserrat">
                Skin Serum
              </p>
            </div>
          </div>

          <div className="aspect-square bg-slate-300 relative group overflow-hidden flex">
            <img
              src={category3}
              alt="cosmetics"
              className="object-cover w-full object-center"
            />
            {/* cover element */}
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[rgba(241,245,249,.5)] flex justify-center items-center transition-opacity">
              <p className="hidden group-hover:block px-8 py-2 bg-palleteTenderness text-sm md:text-base font-medium font-montserrat">
                Skin Serum
              </p>
            </div>
          </div>

          <div className="aspect-square lg:aspect-auto lg:col-span-2 lg:h-[285px] bg-slate-300 relative group overflow-hidden flex">
            <img
              src={category4}
              alt="cosmetics"
              className="object-cover w-full object-center"
            />
            {/* cover element */}
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[rgba(241,245,249,.5)] flex justify-center items-center transition-opacity">
              <p className="hidden group-hover:block px-8 py-2 bg-palleteTenderness text-sm md:text-base font-medium font-montserrat">
                Skin Serum
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
