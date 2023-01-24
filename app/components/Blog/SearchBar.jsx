"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchContext } from "../Context/store";

const SearchBar = () => {
  const { setSearchText } = useSearchContext();
  return (
    <div className=" flex flex-col  justify-center rounded-lg py-16  text-slate-200 md:block md:pr-8 ">
      <form className="mx-auto my-0">
        <div className="relative flex  items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute ml-3 text-white"
          />
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search title or description...."
            className=" rounded-lg bg-gray-700 px-4 py-4   pl-10 font-primary font-semibold text-white placeholder:text-gray-400 focus:outline-none  md:px-16"
          />
        </div>
        {/* <div className="mt-8">
          <h3 className="mb-4 font-primary text-xl font-bold text-white">
            Blog Categories
          </h3>
          <ul className=" font-primary text-gray-400">
            <li
              onClick={(e) => setSearchText("react")}
              className="cursor-pointer text-lg font-semibold hover:text-primary"
            >
              React
            </li>
            <li
              onClick={(e) => setSearchText("supabase")}
              className="cursor-pointer text-lg font-semibold hover:text-primary"
            >
              Supabase
            </li>
            <li
              onClick={(e) => setSearchText("git")}
              className="cursor-pointer text-lg font-semibold hover:text-primary"
            >
              Git
            </li>
            <li
              onClick={(e) => setSearchText("life")}
              className="cursor-pointer text-lg font-semibold hover:text-primary"
            >
              Life and Code
            </li>
          </ul>
        </div> */}
      </form>
    </div>
  );
};

export default SearchBar;
