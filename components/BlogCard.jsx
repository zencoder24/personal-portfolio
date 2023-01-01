import React from "react";
import Image from "next/image";
import mypic from "../assets/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogCard = () => {
  return (
    <div className="max-w-sm  ">
      <span class="bg-green-100 text-right my-2 float-right text-green-800 text-xs font-medium  px-2 py-1 rounded dark:bg-green-200 dark:text-green-900">
        Supabase
      </span>
      <a href="#" className="">
        <Image src={mypic} alt="This is a test" className=" object-cover" />
      </a>
      <div className="my-2">
        <a href="#">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
            An article about Supabase
          </h5>
        </a>
        <p className=" text-sm mb-2 text-gray-400">By: Rodderick Garland</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex gap-2 items-center align-middle text-md font-bold text-center text-black   focus:outline-none "
        >
          Read more
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
