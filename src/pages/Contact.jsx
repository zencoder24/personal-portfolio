import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import ContactItem from "../components/ContactItem";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content=" Contact From section of a Portfolio Site built using React.js by Rodderick Garland"
        />
        <title>Rod Garland | Contact</title>
      </Helmet>
      <section className="py-40 px-10 flex flex-col ">
        <h3 className=" text-center text-white font-bold uppercase text-sm">
          This is how to
        </h3>
        <h1 className=" text-white uppercase font-bold text-center pb-4 mx-0 my-auto text-4xl">
          Contact <span className="text-calm-green">Me</span>
        </h1>
        <div className="contact-container flex flex-col md:flex-row md:gap-20 md:justify-center">
          <div className="left md:max-w-[500px] md:w-full">
            <ContactItem icon="envelope" contactData="rg6797@outlook.com" />
            <ContactItem icon="github" contactData="github.com/zencoder24" />
            <ContactItem
              icon="linkedIn"
              contactData="linkedin.com/in/rodderick-garland-58ba19160/"
            />
          </div>
          <div className="right md:max-w-[500px] md:w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
