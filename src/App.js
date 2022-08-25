import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import LatestNews from "./components/latest-news/LatestNews";
import PopularProduct from "./components/popular-product/PopularProduct";
import ShopByCategories from "./components/shop-by-categories/ShopByCategories";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
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
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
