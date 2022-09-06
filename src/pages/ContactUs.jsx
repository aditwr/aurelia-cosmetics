import React, { Component } from "react";
// import { Outlet, Route, Routes } from "react-router-dom";
import ContactBoxInfo from "../components/contact/ContactBoxInfo";
import ContactForm from "../components/contact/ContactForm";
import PageTitle from "../partials/PageTitle";

class ContactUs extends Component {
  render() {
    return (
      <div className="pt-16 mb-16">
        {/* title-page */}
        <PageTitle text="Contact Us" />
        {/* container */}
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto">
          <ContactBoxInfo />
        </div>
        {/* embed-google-maps */}
        <div className="my-16">
          <iframe
            title="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7910.286343236331!2d110.77321222611069!3d-7.559364263970942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14450edd210d%3A0xa6ea1f9494841e84!2sFKIP%20JPTK%20UNS%20Kampus%20V!5e0!3m2!1sid!2sid!4v1662429077415!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-80"
          ></iframe>
        </div>
        <div className="px-5 lg:px-0 lg:w-[1200px] mx-auto">
          <ContactForm />
        </div>
        {/* <Routes>
          <Route
            path="coba"
            element={
              <div className="w-full h-32 flex bg-pink-400 justify-center items-center">
                /coba
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="w-full h-32 flex bg-blue-400 justify-center items-center">
                /
              </div>
            }
          />
        </Routes> */}
      </div>
    );
  }
}

export default ContactUs;
