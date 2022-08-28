import React, { Component } from "react";
import About from "./../components/about/About";
import Hero from "./../components/hero/Hero";
import LatestNews from "./../components/latest-news/LatestNews";
import PopularProduct from "./../components/popular-product/PopularProduct";
import ShopByCategories from "./../components/shop-by-categories/ShopByCategories";
import Testimonials from "./../components/testimonials/Testimonials";

class Home extends Component {
  render() {
    return (
      <div className="App font-lato text-slate-800 overflow-hidden">
        {/* hero */}
        <Hero />
        {/* shop-by-categories */}
        <ShopByCategories />
        {/* popular-product */}
        <PopularProduct />
        {/* about */}
        <About />
        {/* latest-news */}
        <LatestNews />
        {/* testimonials */}
        <Testimonials />
      </div>
    );
  }
}

export default Home;
