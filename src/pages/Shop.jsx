import { faAngleRight, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ButtonSuccess from "../components/input/ButtonSuccess";
import InputTextDefault from "../components/input/InputTextDefault";
import BoxSlider from "../components/sliders/BoxSlider";
import PageTitle from "../partials/PageTitle";
import ProductBox from "../partials/ProductBox";

import product1 from "./../assets/img/popular-product/product-1.png";
import product2 from "./../assets/img/popular-product/product-2.png";
import product3 from "./../assets/img/popular-product/product-3.png";
import product4 from "./../assets/img/popular-product/product-4.png";
import product5 from "./../assets/img/popular-product/product-5.png";
import product6 from "./../assets/img/popular-product/product-6.png";

class Shop extends Component {
  render() {
    return (
      // container
      <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto pt-16">
        <PageTitle text="Shop" />
        <div className="mb-16">
          <div className="mb-5">
            <div className="w-full flex gap-2">
              <InputTextDefault />
              <ButtonSuccess text="Search" />
              <button className="w-8 md:w-10 aspect-square text-white text-sm p-1 bg-palleteBase">
                <FontAwesomeIcon icon={faSliders} />{" "}
              </button>
            </div>
          </div>
          <div className="mb-4 md:mb-6">
            <div className="mb-5">
              <h5 className="font-semibold mb-3">Categories</h5>
              <div className="">
                <BoxSlider />
              </div>
            </div>
            {/* <div className="">
              <h5 className="font-semibold mb-3">Brands</h5>
              <div className="grid grid-cols-3 gap-x-3">
                <div className="w-full aspect-square bg-palleteBase flex justify-center items-center">
                  <img src={brand1} alt="cosmetics brand" className="" />
                </div>
                <div className="w-full aspect-square bg-palleteBase"></div>
                <div className="w-full aspect-square bg-palleteBase"></div>
              </div>
            </div> */}
          </div>
          {/* keyword */}
          <div className="w-full flex justify-center mb-2">
            <h3 className="text-2xl lg:text-3xl">All Products</h3>
          </div>
          <p className="text-center opacity-70">Showing result 1 of 16</p>
          <div className="mt-5 sm:mt-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8">
              <div className="">
                <ProductBox
                  img={product6}
                  price="$39.00"
                  productName="Powder"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product5}
                  price="$39.00"
                  productName="Mascara"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product4}
                  price="$39.00"
                  productName="Lipstick"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product3}
                  price="$39.00"
                  productName="Lipstick"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product2}
                  price="$39.00"
                  productName="Hair Mask"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product1}
                  price="$39.00"
                  productName="Oir Serum"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product6}
                  price="$39.00"
                  productName="Powder"
                />
              </div>
              <div className="">
                <ProductBox
                  img={product4}
                  price="$39.00"
                  productName="Lipstick"
                />
              </div>
            </div>
            {/* pagination */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
