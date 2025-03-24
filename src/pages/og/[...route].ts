import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("blog");

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(
  collectionEntries.map(({ slug, data }) => [slug, data])
);

export const { getStaticPaths, GET } = OGImageRoute({
  pages: pages,

  getImageOptions: (path, page: { title: string; description: string }) => ({
    title: page.title,
    description: page.description.split(".")[0] + ".",
    font: {
      title: {
        size: 58,
      },
    },
    logo: {
      path: "./public/avaneesh.webp",
      size: [250],
    },
  }),

  param: "route",
});
