import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [navMenuShown, setNavMenuShown] = useState(false);

  return (
    <nav className="hidden p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl cursor-pointer ">Rodderick Garland</span>
      </div>

      <ul className="md:flex md:items-center gap-6 ] md:z-auto md:static left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-12 md:opacity-100 opacity-0">
        <li className="my-6 md:my-0">
          <a
            href="#"
            className="text-xl uppercase hover:text-garnet cursor-pointer "
          >
            Home
          </a>
        </li>
        <li className="my-6 md:my-0">
          <a
            href="#"
            className="text-xl uppercase hover:font-bold hover:text-garnet cursor-pointer "
          >
            About
          </a>
        </li>
        <li className="my-6 md:my-0">
          <a
            href="#"
            className="text-xl uppercase hover:font-bold hover:text-garnet cursor-pointer "
          >
            Blog
          </a>
        </li>
        <button className=" bg-blackAlt uppercase hover:font-bold flex gap-2 text-white duration-500 px-6 py-2 hover:bg-garnet/95 ">
          <FontAwesomeIcon icon={faCodeFork} />
          <FontAwesomeIcon icon={faStar} />
        </button>
      </ul>
    </nav>
  );
}
