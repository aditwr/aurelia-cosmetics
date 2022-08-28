import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/hero/components/Navbar";
import Footer from "./components/footer/Footer";

// Link
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* Child Render */}
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default App;
