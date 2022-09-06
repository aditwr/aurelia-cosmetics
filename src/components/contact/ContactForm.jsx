import React from "react";
import InputFieldContact from "../input/InputFieldContact";

export default function ContactForm() {
  return (
    <div className="w-full pt-16">
      <h3 className="text-center text-xl font-semibold">Get in Touch</h3>
      <fieldset className="mt-6">
        <form action="">
          <div className="md:flex md:gap-x-6">
            <InputFieldContact
              name="email"
              placeholder="email"
              addClass="mb-5"
            />
            <InputFieldContact
              name="fullname"
              placeholder="fullname"
              addClass="mb-5"
            />
          </div>
          <textarea
            name=""
            id=""
            className="w-full h-32 px-3 mb-5 border "
            placeholder="message"
          ></textarea>
          <button className="bg-palleteTenderness py-2 font-medium md:inline-block md:px-10">
            Send
          </button>
        </form>
      </fieldset>
    </div>
  );
}
