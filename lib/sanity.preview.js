"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("Unable to load preview because you are not loggin in");
}

if (!projectId || !dataset) {
  throw new Error(
    "Missing projectId or dataset. Check your sanity.json or .env"
  );
}

//Allow you to make queries to your endpoints.Getting all the information (both publish and drafts)
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
