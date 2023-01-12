"use client";

import { usePreview } from "../../../lib/sanity.preview";
import BlogList from "./BlogList";

export default function PreviewBlogList({ query }) {
  const blogs = usePreview(null, query);
  return <BlogList blogs={blogs} />;
}
