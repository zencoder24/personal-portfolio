import React from "react";
import Image from "next/image";
import mypic from "../assets/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogCard = () => {
  return (
    <div className="max-w-sm bg-white ">
      <a href="#">
        <Image src={mypic} alt="This is a test" className=" object-cover" />
      </a>
      <div className="mt-2">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
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
