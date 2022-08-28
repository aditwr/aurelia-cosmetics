import React, { Component } from "react";
import SectionHead from "../../partials/SectionHead";
import SeeAllButton from "../../partials/SeeAllButton";
import News from "./News";

class LatestNews extends Component {
  render() {
    return (
      <div className="">
        {/* container */}
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto">
          <SectionHead
            title="Latest News"
            subtitle="Check out the latest news on all things cosmetics! Whether you're looking for the newest products or the hottest trends, we've got you covered."
            addClass="mt-20"
          />
          <News />
          <div className="text-left mt-6">
            <SeeAllButton addClass="md:hidden" />
          </div>
        </div>
      </div>
    );
  }
}

export default LatestNews;
