import path from "path";
import { readdir, readFile } from "fs/promises";

import type { Dirent } from "fs";

import matter from "gray-matter";
import { cache } from "react";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type Collection = "homepage-posts" | "blog" | "crafts";

type RawFrontmatter = Record<string, unknown>;

interface BaseDocument<Frontmatter> {
  slug: string;
  url: string;
  frontmatter: Frontmatter;
  content: string;
}

export interface HomepagePostFrontmatter {
  title: string;
  date: string;
  isPinned?: boolean;
}

export type HomepagePost = BaseDocument<HomepagePostFrontmatter>;

export interface BlogFrontmatter {
  title: string;
  date: string;
}

export type BlogPost = BaseDocument<BlogFrontmatter>;

export interface CraftFrontmatter {
  title: string;
  date?: string;
  technologies?: string[];
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  thumbnail?: string;
}

export type Craft = BaseDocument<CraftFrontmatter>;

const getCollectionDir = (collection: Collection) =>
  path.join(CONTENT_ROOT, collection);

const mdxFilenames = cache(
  async (collection: Collection): Promise<string[]> => {
    const directory = getCollectionDir(collection);
    const entries = (await readdir(directory, {
      withFileTypes: true,
    })) as Dirent[];

    return entries
      .filter((entry: Dirent) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry: Dirent) => entry.name)
      .sort();
  }
);

const toSlug = (filename: string) => filename.replace(/\.mdx$/, "");

const readDocument = async (collection: Collection, filename: string) => {
  const filePath = path.join(getCollectionDir(collection), filename);
  const raw = await readFile(filePath, "utf8");
  return matter(raw);
};

const toIsoDate = (value: unknown): string | undefined => {
  if (!value) return undefined;

  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return undefined;

  return date.toISOString();
};

const ensureStringArray = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map((entry) => String(entry));
  }

  return [];
};

const mapHomepagePost = (
  slug: string,
  data: RawFrontmatter,
  content: string
): HomepagePost => {
  const date = toIsoDate(data.date) ?? new Date().toISOString();

  return {
    slug,
    url: `/homepage-posts/${slug}`,
    content,
    frontmatter: {
      title: String(data.title ?? slug),
      date,
      isPinned: Boolean(data.isPinned),
    },
  };
};

const mapBlogPost = (
  slug: string,
  data: RawFrontmatter,
  content: string
): BlogPost => {
  const date = toIsoDate(data.date) ?? new Date().toISOString();

  return {
    slug,
    url: `/blog/${slug}`,
    content,
    frontmatter: {
      title: String(data.title ?? slug),
      date,
    },
  };
};

const mapCraft = (
  slug: string,
  data: RawFrontmatter,
  content: string
): Craft => {
  const date = toIsoDate(data.date);

  return {
    slug,
    url: `/crafts/${slug}`,
    content,
    frontmatter: {
      title: String(data.title ?? slug),
      date,
      technologies: ensureStringArray(data.technologies),
      link: data.link ? String(data.link) : undefined,
      appStoreLink: data.appStoreLink ? String(data.appStoreLink) : undefined,
      playStoreLink: data.playStoreLink
        ? String(data.playStoreLink)
        : undefined,
      thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    },
  };
};

export const getHomepagePosts = cache(async (): Promise<HomepagePost[]> => {
  const filenames = await mdxFilenames("homepage-posts");

  const posts = await Promise.all(
    filenames.map(async (filename: string) => {
      const slug = toSlug(filename);
      const { content, data } = await readDocument("homepage-posts", filename);
      return mapHomepagePost(slug, data, content);
    })
  );

  return posts;
});

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const filenames = await mdxFilenames("blog");

  const posts = await Promise.all(
    filenames.map(async (filename: string) => {
      const slug = toSlug(filename);
      const { content, data } = await readDocument("blog", filename);
      return mapBlogPost(slug, data, content);
    })
  );

  return posts;
});

export const getCrafts = cache(async (): Promise<Craft[]> => {
  const filenames = await mdxFilenames("crafts");

  const crafts = await Promise.all(
    filenames.map(async (filename: string) => {
      const slug = toSlug(filename);
      const { content, data } = await readDocument("crafts", filename);
      return mapCraft(slug, data, content);
    })
  );

  return crafts;
});

export const getHomepagePost = cache(
  async (slug: string): Promise<HomepagePost | undefined> => {
    const posts = await getHomepagePosts();
    return posts.find((post: HomepagePost) => post.slug === slug);
  }
);

export const getBlogPost = cache(
  async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await getBlogPosts();
    return posts.find((post: BlogPost) => post.slug === slug);
  }
);

export const getCraft = cache(
  async (slug: string): Promise<Craft | undefined> => {
    const crafts = await getCrafts();
    return crafts.find((craft: Craft) => craft.slug === slug);
  }
);

export const getBlogSlugs = cache(async (): Promise<string[]> => {
  const posts = await getBlogPosts();
  return posts.map((post: BlogPost) => post.slug);
});

export const getCraftSlugs = cache(async (): Promise<string[]> => {
  const crafts = await getCrafts();
  return crafts.map((craft: Craft) => craft.slug);
});
