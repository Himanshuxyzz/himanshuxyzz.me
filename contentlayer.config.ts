import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Posts = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: `homepage-posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    isPinned: { type: "boolean", default: false },
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

export const Craft = defineDocumentType(() => ({
  name: "Craft",
  filePathPattern: `crafts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: false },
    technologies: { type: "list", of: { type: "string" }, default: [] },
    link: { type: "string", required: false },
    appStoreLink: { type: "string", required: false },
    playStoreLink: { type: "string", required: false },
    thumbnail: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (craft) =>
        `/crafts/${craft._raw.sourceFileName.replace(".mdx", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Posts, Blog, Craft],
  // documentTypes: [Blog],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
