import React, { Component } from "react";
import BlogCard from "../components/BlogCard";

export class Blogs extends Component {
  render() {
    return (
      <div className="my-32 mx-6 text-white md:mx-16 ">
        <div id="blogs-head" className="flex flex-col gap-12 ">
          <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2">
            <h1 className="text-4xl font-bold md:text-5xl">apex-blogs</h1>
            <h3 className="text-xl md:text-right">
              A series of posts of concepts, best practices, and life lessons
              learned while coding.
            </h3>
          </div>
          <div>
            <form className="flex flex-col gap-2 md:relative md:w-[30%]">
              <input
                type="text"
                placeholder="Enter your email"
                className=" rounded-full border py-3 pl-4 md:w-full"
              />

              <button className="rounded-full bg-black py-3 text-white md:absolute md:top-0 md:right-0 md:px-4 md:font-semibold">
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-16 mb-6 border-b border-gray-200 text-center text-xs font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 md:text-base">
            <ul className="-mb-px flex">
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  All
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#"
                  className="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                  aria-current="page"
                >
                  Next.js
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Supabase
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Code Life
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
