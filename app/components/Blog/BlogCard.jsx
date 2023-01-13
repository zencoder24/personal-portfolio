import React from "react";
import code from "../../../public/code.jpg";
import urlFor from "../../../lib/urlFor";
import ClientRoute from "../Blog/ClientRoute";

const BlogCard = ({
  id,
  featImg,
  title,
  categories,
  createdAt,
  description,
  slug,
}) => {
  return (
    <ClientRoute route={`/blogs/${slug}`}>
      <div
        className="card relative flex h-80 w-60 cursor-pointer items-end overflow-hidden rounded-2xl border-[2px] border-[#ccc] bg-gradient-to-b from-black/0 to-black/100 bg-center text-2xl text-gray-200 shadow-sm
       before:absolute before:left-[-50%] before:top-[-50%] before:-z-10 before:h-[250%] before:w-[250%] before:rounded-[50%]
       before:bg-gray-300 before:content-[''] after:absolute after:left-[-50%] after:top-[-50%] after:-z-10 after:h-[200%] after:w-[200%] after:rounded-[50%] after:bg-white after:content-[''] hover:rotate-0 hover:text-orange-400"
        style={{
          backgroundImage: `url(${urlFor(featImg).url()})`,
          backgroundSize: "cover",
          backdropFilter: "opacity(1)",
        }}
      >
        <div className=" flex h-full w-full items-end backdrop-brightness-50   hover:backdrop-brightness-100">
          <div className="m-4">
            <h1 className=" m-0 text-2xl font-bold leading-[1.2em]">{title}</h1>
            <p className=" my-2 text-sm leading-6 line-clamp-2">
              {description}
            </p>
            <div className="date absolute top-0 right-0 p-4 text-sm font-semibold leading-4 opacity-80">
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="tags flex">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="tag mr-2 rounded bg-white/50 px-2 py-0 text-xs leading-6"
                >
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ClientRoute>
  );
};

export default BlogCard;
