import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden md:flex md:space-x-4 md:flex-row md:justify-around md:mt-10 md:mx-32 link-menu-container h-full text-center">
      <Link
        className="text-xl  font-bold text-white hover:border-b-4  focus:border-b-4  focus:border-calm-green hover:leading-4 focus:leading-4  hover:border-calm-green hover:rounded-sm "
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-xl  font-bold text-white hover:border-b-4  focus:border-b-4  focus:border-calm-green hover:leading-4 focus:leading-4  hover:border-calm-green hover:rounded-sm "
        to="/about"
      >
        About
      </Link>
      <Link
        className="text-xl  font-bold text-white hover:border-b-4  focus:border-b-4  focus:border-calm-green hover:leading-4 focus:leading-4  hover:border-calm-green hover:rounded-sm "
        to="/resume"
      >
        Resume
      </Link>
      <Link
        className="text-xl  font-bold text-white hover:border-b-4  focus:border-b-4  focus:border-calm-green hover:leading-4 focus:leading-4  hover:border-calm-green hover:rounded-sm "
        to="/projects"
      >
        Projects
      </Link>
      <a
        className="text-xl  font-bold text-white hover:border-b-4  focus:border-b-4  focus:border-calm-green hover:leading-4 focus:leading-4  hover:border-calm-green hover:rounded-sm "
        href="https://apex-blogs.vercel.app/"
      >
        Blog
      </a>
      <Link
        className="text-xl  font-bold text-white hover:border-b-4  focus:border-b-4  focus:border-calm-green hover:leading-4 focus:leading-4  hover:border-calm-green hover:rounded-sm "
        to="/contact"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default Navbar;
