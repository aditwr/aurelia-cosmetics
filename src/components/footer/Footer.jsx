import React from "react";

// img
import logo from "./../../assets/img/Aurelia-logo-white.svg";
import instagram from "./../../assets/img/socials/instagram.png";
import twitter from "./../../assets/img/socials/twitter.png";
import facebook from "./../../assets/img/socials/facebook.png";
import youtube from "./../../assets/img/socials/youtube.png";
import locationIcon from "./../../assets/img/icons/icon-location.png";
import telephoneIcon from "./../../assets/img/icons/icon-telephone.png";
import messageIcon from "./../../assets/img/icons/icon-message.png";

export default function Footer() {
  return (
    <div className="bg-palleteBase">
      <section className="text-left px-5 lg:px-0 lg:w-[1200px] mx-auto">
        <div className="discont-section pt-8">
          <div className="md:flex border-b border-slate-300 pb-6">
            <div className="md:basis-9/12">
              <p className="text-white md:text-lg">
                Looking for the perfect cosmetics at a discount? Follow our
                Instagram and receive 10% off your purchase!
              </p>
            </div>

            <div className="md:basis-3/12 text-right">
              <a
                href="example.com"
                className="inline-block px-5 py-2 rounded-md bg-palleteTenderness mt-4 md:mt-0 font-montserrat text-xs md:text-sm font-semibold"
              >
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
        <div className="footer-content text-white pb-8 border-b border-slate-400">
          <div className="lg:flex mt-8">
            <div className="lg:basis-5/12">
              <img
                src={logo}
                alt="aurelia cosmetics logo"
                className="w-28 h-auto"
              />
              <p className="lg:w-8/12 mt-6 text-sm opacity-70 leading-relaxed">
                At Aurelia Cosmetics, we understand how frustrating it can be to
                find the perfect product for your skin. We want our customers to
                feel good about their bodies, and we want them to feel confident
                in their skin.
              </p>
              <div className="my-6 flex gap-4">
                <a href="example.com" className="">
                  <img src={instagram} alt="" className="w-10" />
                </a>
                <a href="example.com" className="">
                  <img src={twitter} alt="" className="w-10" />
                </a>
                <a href="example.com" className="">
                  <img src={youtube} alt="" className="w-10" />
                </a>
                <a href="example.com" className="">
                  <img src={facebook} alt="" className="w-10" />
                </a>
              </div>
            </div>

            <div className="lg:basis-4/12 flex">
              <div className="basis-1/2">
                <h5 className="text-xl font-medium mb-3">Information</h5>
                <ul className="">
                  <li className="mb-2">
                    <a href="example.com" className="text-sm opacity-70">
                      About Aurelia
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="example.com" className="text-sm opacity-70">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="example.com" className="text-sm opacity-70">
                      Contanct Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="basis-1/2">
                <h5 className="text-xl font-medium mb-3">Quick Links</h5>
                <ul className="">
                  <li className="mb-2">
                    <a href="example.com" className="text-sm opacity-70">
                      Wishlist
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="example.com" className="text-sm opacity-70">
                      Checkout
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="example.com" className="text-sm opacity-70">
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:basis-3/12 mt-6 lg:mt-0">
              <h5 className="text-xl font-medium mb-3">Contact Uns</h5>
              <ul>
                <li className="mb-2">
                  <a
                    href="example.com"
                    className="text-sm opacity-70 flex items-center gap-2"
                  >
                    <img
                      src={locationIcon}
                      alt=""
                      className="w-4 h-auto inline-block"
                    />{" "}
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="example.com"
                    className="text-sm opacity-70 flex items-center gap-2"
                  >
                    <img
                      src={telephoneIcon}
                      alt=""
                      className="w-4 h-auto inline-block"
                    />{" "}
                    (308) 555-0121
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="example.com"
                    className="text-sm opacity-70 flex items-center gap-2"
                  >
                    <img
                      src={messageIcon}
                      alt=""
                      className="w-4 h-auto inline-block"
                    />{" "}
                    jessica.hanson@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white w-full text-sm text-center inline-block pt-3 pb-4 opacity-80">
          Copyright 2022 Aurelia
        </div>
      </section>
    </div>
  );
}
