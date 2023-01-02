import React from "react";
import Image from "next/image";
import mypic from "../assets/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogCard = () => {
  return (
    <div className="max-w-sm  ">
      <span class="float-right my-2 cursor-pointer rounded  bg-gradient-to-tr from-orange-400 to-rose-400 px-2 py-1 text-right  text-xs font-medium">
        #Supabase
      </span>
      <a href="#" className="">
        <Image src={mypic} alt="This is a test" className=" object-cover" />
      </a>
      <div className="my-2">
        <a href="#">
          <h5 className=" text-2xl font-bold tracking-tight text-slate-200">
            An article about Supabase
          </h5>
        </a>
        <p className=" mb-2 text-sm italic text-slate-400">
          Written By: Rodderick Garland
        </p>
        <p className="mb-3 font-normal  dark:text-slate-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="text-md inline-flex items-center gap-2 text-center align-middle font-bold text-slate-200 hover:text-orange-400   focus:outline-none "
        >
          Read more
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
