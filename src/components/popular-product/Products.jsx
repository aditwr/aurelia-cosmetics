import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper";

// css import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// image
import product1 from "./../../assets/img/popular-product/product-1.png";
import product2 from "./../../assets/img/popular-product/product-2.png";
import product3 from "./../../assets/img/popular-product/product-3.png";
import product4 from "./../../assets/img/popular-product/product-4.png";
import product5 from "./../../assets/img/popular-product/product-5.png";
import product6 from "./../../assets/img/popular-product/product-6.png";
import ProductBox from "../../partials/ProductBox";

class Products extends Component {
  render() {
    return (
      <div className="md:mt-6 lg:mt-8 sm:px-5 lg:px-0 lg:w-[1200px] mx-auto">
        <Swiper
          modules={[Navigation, EffectCoverflow, Pagination]}
          slidesPerView={2}
          spaceBetween={12}
          navigation={true}
          centeredSlides={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              centeredSlides: false,
              slidesPerView: 3,
              spaceBetween: 20,
              effect: "slide",
            },
            768: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 20,
              effect: "slide",
            },
            1024: {
              modules: [Navigation, EffectCoverflow, Pagination],
              centeredSlides: false,
              slidesPerView: 5,
              spaceBetween: 20,
              grabCursor: true,
              effect: "slide",
              pagination: true,
            },
          }}
        >
          <SwiperSlide>
            <ProductBox img={product1} price="$50.00" productName="Oil Serum" />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox img={product2} price="$39.00" productName="Hair Mask" />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox img={product3} price="$59.00" productName="Lipstick" />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox
              img={product4}
              price="$290.00"
              productName="Cosmetics Pack I"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox img={product5} price="$45.00" productName="Mascara" />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox img={product6} price="$49.00" productName="Powder" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Products;
