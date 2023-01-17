"use client";

import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  //For Toast displays upon submission
  const [messageSent, setMessageSent] = useState(false);
  const [serverError, setServerError] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  const form = useRef();
  //Using the Formik Library for Form validation
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Please Enter a Name"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email Address Required"),
      message: Yup.string()
        .min(20, "Please include a more detailed message")
        .required("Please Submit a Message"),
    }),
    onSubmit: (values, { resetForm }) => {
      try {
        emailjs
          .sendForm(serviceID, templateID, form.current, emailPublicKey)
          .then(() => {
            setServerError(false);
            setMessageSent(true);
            resetForm({ values: "" });
            setTimeout(() => {
              setMessageSent(false);
            }, 3000);
            pageReset();
          });
      } catch {
        setServerError(true);
        console.log("Fail here");
        setMessageSent(false);
        pageReset();
      }
    },
  });

  const pageReset = () => {
    window.scrollTo(0, 0);
  };

  //Reusable Toast Component
  const MessageToast = ({ message, icon, backGColor }) => {
    return (
      <div
        id="toast"
        className={`${backGColor} space-x mx-auto my-6 flex w-full max-w-xs items-center space-x-4 divide-x  divide-white  rounded-lg  p-4 text-white shadow `}
        role="alert"
      >
        <FontAwesomeIcon icon={icon} />
        <div className="pl-4 text-sm font-normal">{message}</div>
      </div>
    );
  };

  return (
    <>
      <form className="my-4 w-full" ref={form} onSubmit={formik.handleSubmit}>
        {messageSent ? (
          <MessageToast
            backGColor="bg-green-500"
            message="Message Sent Successfully"
            icon={faPaperPlane}
          />
        ) : null}
        {serverError ? (
          <MessageToast
            backGColor="bg-red-500"
            message="Server Error Please Try Again Later"
            icon={faCircleExclamation}
          />
        ) : null}
        <div className="form-group mb-8 w-full">
          <label
            className=" font-primary text-xl font-bold text-primary"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="mt-4 w-full rounded-lg border-none  bg-gray-700 p-5 font-primary text-lg text-white outline-none"
            type="text"
            id="name"
            name="user_name"
            value={formik.values.user_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.user_name && formik.errors.user_name ? (
            <p className=" font-primary text-xs font-semibold text-red-500">
              {formik.errors.user_name}
            </p>
          ) : null}
        </div>

        <div className="form-group mb-8 w-full">
          <label
            className=" font-primary text-xl font-bold text-primary"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="mt-4 w-full rounded-lg border-none  bg-gray-700 p-5 font-primary text-lg text-white outline-none"
            type="text"
            id="email"
            name="user_email"
            value={formik.values.user_email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.user_email && formik.errors.user_email ? (
            <p className=" text-xs font-semibold text-red-500">
              {formik.errors.user_email}
            </p>
          ) : null}
        </div>

        <div className="form-group mb-8 w-full font-primary">
          <label className=" text-xl font-bold  text-primary" htmlFor="message">
            Message
          </label>
          <textarea
            className="mt-4 min-h-[15rem] w-full resize-y rounded-lg  border-none bg-gray-700 p-5 text-base text-white outline-none"
            type="text"
            id="message"
            name="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message ? (
            <p className=" text-xs font-semibold text-red-500">
              {formik.errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className=" my-auto mx-0 cursor-pointer rounded-lg border-none bg-gradient-to-tr from-primary to-secondary py-4 px-16 font-primary text-lg outline-none  "
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
