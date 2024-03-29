import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/Blog/RichTextComponents";
import ShareButton from "../../../components/Blog/ShareButton";

export async function generateStaticParams() {
  const query = groq`*[_type =='blogpost']
  {
    slug
  }
  `;

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function BlogPost({ params: { slug } }) {
  const query = groq`
  *[_type == 'blogpost' && slug.current == $slug] [0]
  {
    ...,
    author ->,
    categories[] ->
  }
  `;

  const blog = await client.fetch(query, { slug });

  return (
    <>
      <article className=" mt-24 text-gray-200 md:mx-40 md:mt-12">
        <div className="blog-title-heading flex flex-col gap-y-2 ">
          <div className="flex flex-row gap-x-4">
            {blog.categories.map((category) => (
              <div
                key={category._id}
                className="font-primary text-base text-primary md:text-lg"
              >
                <h3>#{category.title}</h3>
              </div>
            ))}
          </div>
          <h1 className=" font-primary text-4xl font-bold md:text-5xl">
            {blog.title}
          </h1>
          <p className=" font-secondary text-base italic md:text-lg">
            {blog.description}
          </p>
        </div>
        <div className="my-12 flex flex-col items-center gap-y-4 lg:flex-row lg:items-center lg:justify-between">
          <div className=" flex flex-row items-center gap-x-2">
            <img
              id="avatar"
              src={urlFor(blog.author.image).url()}
              alt={blog.author.name}
              className="h-12 w-12 rounded-full"
            />
            <div id="author-date">
              <h3 className="font-secondary font-semibold">
                {blog.author.name}
              </h3>
              <p className=" font-secondary italic ">
                Written on:{" "}
                {new Date(blog._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          {/*Button*/}
          <ShareButton
            slug={slug}
            title={blog.title}
            description={blog.description}
          />
        </div>
        <div className="relative h-72 w-full md:h-96">
          <Image
            src={urlFor(blog.featureImage).url()}
            alt="Code on Screen"
            fill
            className="w-full !object-cover"
          />
        </div>
        {/* Blog Body */}
        <div className=" mb-36 text-white">
          <PortableText value={blog.body} components={RichTextComponents} />
        </div>
      </article>
    </>
  );
}

export default BlogPost;
