import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import GlassButton from "../../components/GlassButton";
import Link from "next/link";
import BlogContainer from "../../components/Blog/BlogContainer";

export default async function Blogs() {
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
              className=" rounded-lg bg-gradient-to-tr from-primary to-secondary py-3 text-center font-semibold text-white  md:hidden md:px-4  "
            >
              Subscribe
            </Link>
          </form>
        </div>

        <div className="mt-16 mb-6 md:flex">
          {/*Category Select for Mobile */}
          <select
            id="categories"
            className="mb-12 block w-full rounded-lg  bg-gray-700 p-2.5  text-sm text-white focus:outline-none md:hidden"
          >
            <option defaultValue className="font-semibold text-gray-400">
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
                  className="absolute ml-3 text-white"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-lg bg-gray-700  px-3 py-2 pl-10 font-primary font-semibold text-white placeholder:text-gray-400  focus:outline-none"
                />
              </div>
            </form>
            <div className="mt-8">
              <h3 className="mb-4 font-primary text-xl font-bold text-white">
                Blog Categories
              </h3>
              <ul className=" font-primary text-gray-400">
                <li className="cursor-pointer text-lg font-semibold hover:text-primary">
                  React
                </li>
                <li className="cursor-pointer text-lg font-semibold hover:text-primary">
                  Supabase
                </li>
                <li className="cursor-pointer text-lg font-semibold hover:text-primary">
                  Git
                </li>
                <li className="cursor-pointer text-lg font-semibold hover:text-primary">
                  Life and Code
                </li>
              </ul>
            </div>
          </div>
          <BlogContainer />
        </div>
      </div>
    </div>
  );
}
