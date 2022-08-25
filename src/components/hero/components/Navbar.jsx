import React, { Component } from "react";
import logo from "./../../../assets/img/Aurelia_logo.png";
import iconSearch from "./../../../assets/img/icons/icon-search.svg";
import iconFavorite from "./../../../assets/img/icons/icon-favorite.svg";
import iconShopCart from "./../../../assets/img/icons/icon-shopping-cart.svg";
import iconHamburger from "./../../../assets/img/icons/icon-hamburger.svg";

export default class Navbar extends Component {
  componentDidMount() {}
  render() {
    return (
      <header className="header w-full fixed z-50 navbar-wrapper bg-palleteWhite h-16 shadow-sm">
        <nav className="navbar-container h-full px-5 lg:px-0 lg:w-[1200px] mx-auto flex items-center">
          {/* brand container */}
          <div className="brand-container w-1/2 lg:w-3/12 h-full">
            <div className="brand pt-4">
              <img
                src={logo}
                alt="aurela cosmetic"
                className="h-6 hover:animate-pulse"
              />
            </div>
          </div>
          {/* nav menu */}
          <div className="nav-menu-container hidden lg:flex justify-center lg:w-6/12 h-full">
            <div className="nav-menu h-full pt-6">
              <ul className="text-slate-700 font-montserrat text-sm">
                <li className="inline-block mx-4">
                  <p className="font-medium underline underline-offset-4">
                    Home
                  </p>
                </li>
                <li className="inline-block mx-4">
                  <p className="font-medium">Shop</p>
                </li>
                <li className="inline-block mx-4">
                  <p className="font-medium">Product</p>
                </li>
                <li className="inline-block mx-4">
                  <p className="font-medium">Blog</p>
                </li>
              </ul>
            </div>
          </div>
          {/* nav features */}
          <div className="nav-features w-1/2 lg:w-3/12 h-full flex items-center justify-end">
            <div className="icon-container p-2 md:mx-2 hover:rounded-full hover:bg-palleteDensity hover:animate-pulse">
              <img src={iconSearch} alt="" className="h-5 w-auto" />
            </div>
            <div className="icon-container p-2 md:mx-2 hover:rounded-full hover:bg-palleteDensity hover:animate-pulse">
              <img src={iconFavorite} alt="" className="h-4 w-auto" />
            </div>
            <div className="icon-container p-2 md:mx-2 hover:rounded-full hover:bg-palleteDensity hover:animate-pulse">
              <img src={iconShopCart} alt="" className="h-5 w-auto" />
            </div>
            <div className="icon-container p-2 md:mx-2 hover:rounded-full hover:bg-palleteDensity hover:animate-pulse">
              <img src={iconHamburger} alt="" className="h-3 w-auto" />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
