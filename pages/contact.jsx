import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactItem from "../components/Contact/ContactItem";

const contact = () => {
  return (
    <div>
      <section id="contact-me" className="my-32 flex flex-col text-gray-200">
        <div id="contact-me-title-group" className="mb-12 ">
          <h2 className=" text-4xl font-bold text-white md:text-5xl">
            Contact Me
          </h2>
        </div>

        <div className="contact-container flex flex-col md:flex-row  md:gap-20">
          <div className="left md:w-full md:max-w-[500px]">
            <ContactItem icon="envelope" contactData="rg6797@outlook.com" />
            <ContactItem icon="github" contactData="github.com/zencoder24" />
            <ContactItem
              icon="linkedIn"
              contactData="linkedin.com/in/rodderick-garland-58ba19160/"
            />
          </div>
          <div className="right md:w-full md:max-w-[500px]">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
