import React, { Component } from "react";
import logo from "./../../../assets/img/Aurelia_logo.png";
import iconSearch from "./../../../assets/img/icons/icon-search.svg";
import iconFavorite from "./../../../assets/img/icons/icon-favorite.svg";
import iconShopCart from "./../../../assets/img/icons/icon-shopping-cart.svg";
import iconHamburger from "./../../../assets/img/icons/icon-hamburger.svg";

// React Router
import { Link } from "react-router-dom";
import anime from "animejs";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const showNavButton = document.querySelector("#show-nav-mobile");
    let displayNavMenu = false;
    showNavButton.addEventListener("click", function () {
      if (!displayNavMenu) {
        anime({
          targets: "#nav-menu",
          height: "120px",
          easing: "linear",
          opacity: 1,
          duration: 150,
        });
      } else {
        anime({
          targets: "#nav-menu",
          height: "0px",
          easing: "linear",
          opacity: 0,
          duration: 150,
        });
      }
      displayNavMenu = !displayNavMenu;
    });
  }
  render() {
    return (
      <header className="w-full fixed z-50 bg-palleteWhite h-16 shadow-sm">
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
          <div
            id="nav-menu"
            className="absolute top-16 right-0 lg:static nav-menu-container w-full overflow-hidden h-0 bg-white opacity-0 lg:opacity-100 border-b border-slate-200 lg:bg-transparent flex lg:flex justify-center lg:w-6/12 lg:h-full"
          >
            <div className="nav-menu flex justify-center lg:block h-full w-full lg:w-auto lg:pt-6">
              <ul className="flex items-center sm:gap-x-6 lg:block text-slate-700 font-montserrat text-sm">
                <li className="inline-block lg:mx-2">
                  <Link to="/" className="font-bold py-2 px-3">
                    Home
                  </Link>
                </li>
                <li className="inline-block lg:mx-2">
                  <Link to="/shop" className="font-medium py-2 px-3">
                    Shop
                  </Link>
                </li>
                <li className="inline-block lg:mx-2">
                  <Link to="/products" className="font-medium py-2 px-3">
                    Products
                  </Link>
                </li>
                <li className="inline-block lg:mx-2">
                  <Link to="/blog" className="font-medium py-2 px-3">
                    Blog
                  </Link>
                </li>
                <li className="inline-block lg:mx-2">
                  <Link to="/about" className="font-medium py-2 px-3">
                    About
                  </Link>
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
            <button id="show-nav-mobile" className="lg:hidden">
              <div className="icon-container p-2 md:mx-2 hover:rounded-full hover:bg-palleteDensity hover:animate-pulse">
                <img src={iconHamburger} alt="" className="h-3 w-5" />
              </div>
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
