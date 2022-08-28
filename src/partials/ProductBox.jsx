import React, { Component } from "react";

export default class ProductBox extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="aspect-[1/1.125] flex overflow-hidden">
          <img
            src={this.props.img}
            alt="cosmetic product"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="text-center">
          <p className="mt-2 font-medium text-base">{this.props.price}</p>
          <h5 className="mt-2 font-semibold text-base">
            {this.props.productName}
          </h5>
        </div>
      </div>
    );
  }
}
