import React, { Component } from "react";
import SectionHead from "../../partials/SectionHead";
import SeeAllButton from "../../partials/SeeAllButton";
import Categories from "./Categories";

export default class ShopByCategories extends Component {
  render() {
    return (
      <div className="mt-20 text-left">
        {/*  container */}
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto">
          <SectionHead
            title="Shop by Categories"
            subtitle="Here is a quick guide to help you choose the right products for your
            needs."
          />
          <Categories addClass="md:mt-6 lg:mt-8" />
          <SeeAllButton addClass="inline-block mt-4 md:hidden" />
        </div>
      </div>
    );
  }
}
