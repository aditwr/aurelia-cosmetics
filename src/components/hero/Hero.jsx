import React, { Component } from "react";
import Carousel from "./components/Carousel";
import StockBrands from "./components/StockBrands";

export default class Hero extends Component {
  render() {
    return (
      <div>
        {/* carousel */}
        <Carousel />
        {/* stock-brands */}
        <StockBrands />
      </div>
    );
  }
}
