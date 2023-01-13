import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import StudioNavbar from "./app/components/Studio/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  name: "Rod_Content_Studio",
  title: "Rod Content Studio",

  projectId,
  dataset,

  plugins: [deskTool(), scheduledPublishing(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
