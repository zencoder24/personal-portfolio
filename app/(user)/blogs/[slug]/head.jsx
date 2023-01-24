import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import Favicon from "../../../components/Favicon";
import { NextSeo } from "next-seo";

export default async function Head({ params: { slug } }) {
  const query = groq`
  *[_type == 'blogpost' && slug.current == $slug] [0]
  {
    ...,
    author ->,
    categories[] ->
  }
  `;

  const blog = await client.fetch(query, { slug });
  console.log(urlFor(blog.featureImage).url());

  return (
    <>
      <Favicon />
      <NextSeo
        useAppDir={true}
        title={blog.title}
        description={blog.description}
        openGraph={{
          title: blog.title,
          description: blog.description,
          url: `www.rodthedev.com/blogs/${slug}`,
          images: [
            {
              url: urlFor(blog.featureImage).url(),
            },
          ],
          siteName: "RodTheDev",
        }}
        twitter={{
          handle: "@RoddTheDev",
          site: "@RoddTheDev",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
