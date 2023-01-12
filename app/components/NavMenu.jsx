"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        animate={menuOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 bottom-0 z-[100] w-72 text-right text-gray-100  shadow-xl  md:hidden "
      >
        <div className="absolute top-0 right-0 bottom-0 w-full bg-[#1b1b1b] opacity-100">
          <div className="link-menu-container flex h-full flex-col justify-center space-y-5 text-center">
            <a
              onClick={(e) => setMenuOpen(!menuOpen)}
              className=" text-gray- text-2xl uppercase   "
              href="/"
            >
              Home
            </a>
            <a
              onClick={(e) => setMenuOpen(!menuOpen)}
              className=" text-2xl uppercase text-gray-200 "
              href="/about-me"
            >
              About
            </a>
            <a
              onClick={(e) => setMenuOpen(!menuOpen)}
              className=" text-2xl uppercase text-gray-200 "
              to="/blogs"
            >
              Blog
            </a>
            <a
              onClick={(e) => setMenuOpen(!menuOpen)}
              className=" text-2xl uppercase text-gray-200 "
              to="/contact-me"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.nav>
      <motion.div
        onClick={(e) => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-[101] cursor-pointer space-x-2 md:hidden"
      >
        <FontAwesomeIcon
          className={` ${menuOpen ? "hidden" : ""} h-6 text-blackAlt`}
          icon={faBars}
        />
      </motion.div>
      <motion.div
        onClick={(e) => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-[101] cursor-pointer space-x-2 md:hidden"
      >
        <FontAwesomeIcon
          className={` ${menuOpen ? "" : "hidden"} h-6 text-white`}
          icon={faXmark}
        />
      </motion.div>
    </>
  );
};

export default NavMenu;
