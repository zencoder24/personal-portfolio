import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [navMenuShown, setNavMenuShown] = useState(false);

  return (
    <nav className="hidden py-8  md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <span className="cursor-pointer bg-gradient-to-tr from-orange-400 to-rose-400 bg-clip-text  text-4xl font-extrabold uppercase text-transparent ">
          RG.
        </span>
      </div>

      <div id="right-nav" className="flex flex-row gap-24">
        <ul className=" left-0 mr-12 gap-6 py-4 pl-12 opacity-0 md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100">
          <li className="my-6 md:my-0">
            <a
              href="#"
              className="cursor-pointer text-xl text-slate-400 hover:text-white  "
            >
              Home
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a
              href="#"
              className="cursor-pointer text-xl text-slate-400 hover:text-white "
            >
              About
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a
              href="#"
              className="cursor-pointer text-xl text-slate-400 hover:text-white "
            >
              Blog
            </a>
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
