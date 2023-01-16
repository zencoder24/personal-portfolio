import { groq } from "next-sanity";
import PreviewSuspense from "../Studio/PreviewSuspense";
import { previewData } from "next/headers";
import { client } from "../../../lib/sanity.client";
import BlogList from "./BlogList";
import PreviewBlogList from "./PreviewBlogList";

const query = groq`
  *[_type == 'blogpost']{
    ...,
    author ->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function BlogContainer() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p className="animate-pulse text-center text-lg text-primary">
              Loading Blogs....
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const blogs = await client.fetch(query);
  return <BlogList blogs={blogs} />;
}
