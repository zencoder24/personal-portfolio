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
        className="space-x mx-auto my-6 flex w-full max-w-xs items-center space-x-4 divide-x  divide-gray-200  rounded-lg bg-red-500 p-4 text-gray-200 shadow "
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
        <div className="form-group mb-8 w-full">
          <label className=" text-xl font-bold text-orange-400" htmlFor="name">
            Your Name
          </label>
          <input
            className="mt-4 w-full rounded-lg  border-none bg-gray-700 p-5 text-lg text-gray-200 outline-none"
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

        <div className="form-group mb-8 w-full">
          <label className=" text-xl font-bold text-orange-400" htmlFor="email">
            Your Email
          </label>
          <input
            className="mt-4 w-full rounded-lg  border-none bg-gray-700 p-5 text-lg text-gray-200 outline-none"
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

        <div className="form-group mb-8 w-full">
          <label
            className=" text-xl font-bold text-orange-400"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="mt-4 min-h-[15rem] w-full resize-y rounded-lg  border-none bg-gray-700 p-5 text-base text-gray-200 outline-none"
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
          className=" my-auto mx-0 cursor-pointer rounded-lg border-none bg-gradient-to-tr from-orange-400 to-rose-400 py-4 px-16 text-lg outline-none  "
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
