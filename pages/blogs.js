import React, { Component } from "react";
import BlogCard from "../components/BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import GlassButton from "../components/GlassButton";

export class Blogs extends Component {
  render() {
    return (
      <div className="my-32 text-slate-200  ">
        <div id="blogs-head" className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">apex-blogs</h1>
            <h3 className="text-xl text-slate-400 md:w-[50%] ">
              A series of posts of concepts, best practices, and life lessons
              learned while coding. Subscribe to be updated on the latest blog
              entries.
            </h3>
          </div>
          <div>
            <form className="flex flex-col gap-2 md:flex md:w-[50%] md:flex-row">
              <input
                type="text"
                placeholder="Enter your email"
                className=" rounded-lg bg-gray-700 py-3 pl-4 text-gray-200  placeholder:font-semibold placeholder:text-gray-400 focus:outline-none  md:w-full"
              />

              <GlassButton mobileDisplay="hidden" btnText="Subscribe" />

              <button className=" rounded-lg bg-gradient-to-tr from-orange-400 to-rose-400 py-3 font-semibold text-gray-200  md:hidden md:px-4  ">
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-16 mb-6 md:flex">
            {/*Category Select for Mobile */}
            <select
              id="categories"
              class="mb-12 block w-full rounded-lg  bg-gray-700 p-2.5  text-sm text-gray-200 focus:outline-none md:hidden"
            >
              <option selected className="font-semibold text-gray-400">
                View All
              </option>
              <option value="US">React</option>
              <option value="CA">Supabase</option>
              <option value="FR">Git</option>
              <option value="DE">Life And Code</option>
            </select>

            {/*Category Sidebar for md on up */}
            <div className=" hidden rounded-lg py-16  pr-8 text-slate-200 md:block ">
              <form>
                <div className="relative flex items-center">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute ml-3 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-lg  bg-gray-700 px-3 py-2 pl-8 font-semibold text-gray-200 placeholder:text-gray-400  focus:outline-none"
                  />
                </div>
              </form>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-gray-200">
                  Blog Categories
                </h3>
                <ul className=" text-gray-400">
                  <li className="cursor-pointer text-lg font-semibold hover:text-orange-400">
                    React
                  </li>
                  <li className="cursor-pointer text-lg font-semibold hover:text-orange-400">
                    Supabase
                  </li>
                  <li className="cursor-pointer text-lg font-semibold hover:text-orange-400">
                    Git
                  </li>
                  <li className="cursor-pointer text-lg font-semibold hover:text-orange-400">
                    Life and Code
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-y-10 md:grid md:grid-cols-2 md:gap-10">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
