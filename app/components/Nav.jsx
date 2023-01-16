"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [navMenuShown, setNavMenuShown] = useState(false);

  return (
    <nav className="hidden py-8  md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="cursor-pointer font-pacifico text-4xl  font-extrabold uppercase text-orange-400 text-transparent  "
        >
          RG.
        </Link>
      </div>

      <div id="right-nav" className="flex flex-row gap-24 font-nunito">
        <ul className=" left-0 mr-12 gap-6 py-4 pl-12 opacity-0 md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100">
          <li className="my-6 md:my-0">
            <Link
              href="/"
              className="cursor-pointer text-xl text-slate-400 hover:text-white  "
            >
              Home
            </Link>
          </li>
          <li className="my-6 md:my-0">
            <Link
              href="/about-me"
              className="cursor-pointer text-xl text-slate-400 hover:text-white "
            >
              About
            </Link>
          </li>
          <li className="my-6 md:my-0">
            <Link
              href="/blogs"
              className="cursor-pointer text-xl text-slate-400 hover:text-white "
            >
              Blog
            </Link>
          </li>
          <li className="my-6 md:my-0">
            <Link
              href="/contact"
              className="cursor-pointer text-xl text-slate-400 hover:text-white "
            >
              Contact Me
            </Link>
          </li>
        </ul>
        {/* <button className=" flex gap-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 px-8 py-3 uppercase text-white duration-500  ">
          <FontAwesomeIcon icon={faCodeFork} />
          <FontAwesomeIcon icon={faStar} />
        </button> */}
      </div>
    </nav>
  );
}
