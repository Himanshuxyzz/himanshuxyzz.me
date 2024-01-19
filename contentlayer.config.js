import { defineDocumentType, makeSource } from "@contentlayer/source-files";

// export const Post = defineDocumentType(() => ({
//   name: "Post",
//   filePathPattern: `post/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: { type: "string", required: true },
//     date: { type: "date", required: true },
//   },
//   computedFields: {
//     url: {
//       type: "string",
//       resolve: (post) => `${post._raw.flattenedPath}`,
//     },
//   },
// }));

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
  // documentTypes: [Post,Blog],
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
