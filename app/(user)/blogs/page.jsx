import React from "react";
import GlassButton from "../../components/GlassButton";
import Link from "next/link";
import BlogContainer from "../../components/Blog/BlogContainer";
import SearchBar from "../../components/Blog/SearchBar";

export default function Blogs() {
  return (
    <div className="my-32 text-white  ">
      <div id="blogs-head" className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-primary text-4xl font-bold md:text-5xl">
            apex-blogs
          </h1>
          <h3 className="font-secondary text-xl text-slate-400 md:w-[50%] ">
            A series of posts of concepts, best practices, and life lessons
            learned while coding. Subscribe to be updated on the latest blog
            entries.
          </h3>
        </div>
        <div>
          <form className="flex flex-col gap-2 md:flex md:w-[50%] md:flex-row">
            <input
              type="text"
              disabled
              placeholder="Enter your email"
              className=" rounded-lg bg-gray-700 py-3 pl-4 font-primary text-white  placeholder:font-semibold placeholder:text-gray-400 focus:outline-none  md:w-full"
            />

            <GlassButton
              linkPage="#"
              mobileDisplay="hidden"
              btnText="Subscribe"
            />

            <Link
              href="#"
              disabled
              className=" rounded-lg bg-gradient-to-tr from-primary to-secondary py-3 text-center font-semibold text-white  md:hidden md:px-4  "
            >
              Subscribe
            </Link>
          </form>
        </div>

        <div className="mt-16 mb-6 flex flex-col  md:flex-row">
          <SearchBar />
          <BlogContainer />
        </div>
      </div>
    </div>
  );
}
