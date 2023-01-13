import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <div className="mx-auto grid w-max grid-cols-1 items-center justify-center gap-y-10 p-4 md:grid-cols-2 lg:grid lg:gap-10 xl:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          featImg={blog.featureImage}
          title={blog.title}
          description={blog.description}
          categories={blog.categories}
          createdAt={blog._createdAt}
          slug={blog.slug.current}
        />
      ))}
    </div>
  );
};

export default BlogList;
