import React, { Component } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import StockBrands from "./components/StockBrands";

export default class Hero extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
        <Navbar />
        {/* carousel */}
        <Carousel />
        {/* stock-brands */}
        <StockBrands />
      </div>
    );
  }
}
