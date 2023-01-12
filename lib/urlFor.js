import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

//Get a preconfigured url-builder from your snaity client
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default urlFor;
