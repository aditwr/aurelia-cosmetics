import React, { Component } from "react";
import SectionHead from "../partials/SectionHead";
import SeeAllButton from "../partials/SeeAllButton";
import Products from "./Products";

class PopularProduct extends Component {
  render() {
    return (
      <div className="mt-20 text-left">
        {/* container */}
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto">
          <SectionHead
            title="Popular Product"
            subtitle="Looking for a new cosmetic product to try? Check out our list of the most popular cosmetics products this month!"
          />
        </div>
        <Products />
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto mt-8">
          <SeeAllButton addClass="md:hidden" />
        </div>
      </div>
    );
  }
}

export default PopularProduct;
