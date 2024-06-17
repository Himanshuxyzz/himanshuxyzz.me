import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Posts = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: `homepage-posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `${blog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Posts, Blog],
  // documentTypes: [Blog],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
