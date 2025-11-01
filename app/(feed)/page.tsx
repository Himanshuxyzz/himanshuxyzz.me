import { Post } from "@/components/common/Post";
import { getHomepagePosts } from "@/lib/mdx";

export default async function Feed() {
  const posts = await getHomepagePosts();

  if (!posts.length) return null;

  return (
    <>
      {posts.map((post) => (
        <Post key={post.url} post={post} />
      ))}
    </>
  );
}
