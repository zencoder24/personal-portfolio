"use client";
import React from "react";

import { useSearchContext } from "../Context/store";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  const { searchText, setSearchText } = useSearchContext();

  const keys = ["title", "description"];

  const filteredBlogs = blogs.filter((blog) => {
    if (!searchText) return true;
    if (
      keys.some((key) =>
        blog[key].toLowerCase().includes(searchText.toLowerCase())
      )
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className=" relative mx-auto grid w-max grid-cols-1 place-content-center items-center  justify-center gap-y-10  md:grid-cols-2 lg:grid lg:gap-10 xl:grid-cols-3">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            featImg={blog.featureImage}
            title={blog.title}
            description={blog.description}
            categories={blog.categories}
            createdAt={blog._createdAt}
            slug={blog.slug.current}
          />
        ))
      ) : (
        <div className="flex w-full flex-col text-center">
          <p className="text-xl">No Blog Posts Found...</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
