import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          {/* outlet-list */}
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="aurelia-cosmetics" element={<Home />} />
          {/* descendant-routes */}
          <Route path="contact/*" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
