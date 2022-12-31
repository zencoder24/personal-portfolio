import React, { Component } from "react";
import BlogCard from "../components/BlogCard";

export class Blogs extends Component {
  render() {
    return (
      <div className="my-32 mx-6 ">
        <div id="blogs-head" className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">apex-blogs</h1>
          <h3 className="text-xl">
            A series of posts of concepts, best practices, and life lessons
            learned while coding
          </h3>
          <div>
            <form className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className=" rounded-full py-2 border-2 border-emerald-400 placeholder:pl-4"
              />

              <button className="py-2 bg-black rounded-full text-white">
                Subscribe
              </button>
            </form>
          </div>

          <div className="text-xs mt-20 mb-6 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex -mb-px">
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  All
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page"
                >
                  Next.js
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Supabase
                </a>
              </li>
              <li className="mr-1">
                <a
                  href="#"
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Code Life
                </a>
              </li>
            </ul>
          </div>
          <BlogCard />
        </div>
      </div>
    );
  }
}

export default Blogs;
