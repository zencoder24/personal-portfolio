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
          .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
          )
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
        setMessageSent(false);
        pageReset();
      }
    },
  });

  const pageReset = () => {
    window.scrollTo(0, 0);
  };

  //Reusable Toast Component
  const MessageToast = ({ message, icon }) => {
    return (
      <div
        id="toast"
        className="flex items-center mx-auto my-6 p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert"
      >
        <FontAwesomeIcon icon={icon} />
        <div className="pl-4 text-sm font-normal">{message}</div>
      </div>
    );
  };

  return (
    <>
      <form className="w-full my-4" ref={form} onSubmit={formik.handleSubmit}>
        {messageSent ? (
          <MessageToast
            message="Message Sent Successfully"
            icon={faPaperPlane}
          />
        ) : null}
        {serverError ? (
          <MessageToast
            message="Server Error Please Try Again Later"
            icon={faCircleExclamation}
          />
        ) : null}
        <div className="form-group w-full mb-8">
          <label className=" text-xl text-calm-green font-bold" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full text-lg p-5  text-calm-green bg-slate-800 outline-none border-none rounded-lg mt-4"
            type="text"
            id="name"
            name="user_name"
            value={formik.values.user_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.user_name && formik.errors.user_name ? (
            <p className=" text-xs text-red-600">{formik.errors.user_name}</p>
          ) : null}
        </div>

        <div className="form-group w-full mb-8">
          <label className=" text-xl text-calm-green font-bold" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full text-lg p-5  text-calm-green bg-slate-800 outline-none border-none rounded-lg mt-4"
            type="text"
            id="email"
            name="user_email"
            value={formik.values.user_email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.user_email && formik.errors.user_email ? (
            <p className=" text-xs text-red-600">{formik.errors.user_email}</p>
          ) : null}
        </div>

        <div className="form-group w-full mb-8">
          <label
            className=" text-xl text-calm-green font-bold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full text-base p-5 min-h-[15rem] resize-y  text-calm-green bg-slate-800 outline-none border-none rounded-lg mt-4"
            type="text"
            id="message"
            name="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message ? (
            <p className=" text-xs text-red-600">{formik.errors.message}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-slate-800 my-auto mx-0 text-calm-green hover:bg-calm-green hover:text-slate-800 text-lg outline-none border-none py-4 px-16 rounded-lg cursor-pointer "
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
