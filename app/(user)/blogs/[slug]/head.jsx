import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

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

  return (
    <>
      <title>{blog.title}</title>
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={blog.description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={urlFor(blog.featureImage).url()} />
      <meta name="twitter:title" content={blog.title} />
      <meta name="twitter:description" content={blog.description} />
      <meta name="twitter:image" content={urlFor(blog.featureImage).url()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@RoddTheDev" />
    </>
  );
}
