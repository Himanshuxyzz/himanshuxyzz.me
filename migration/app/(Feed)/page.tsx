import { allPosts } from "@/.contentlayer/generated";
import { Post } from "@/components/common/Post";

export default function Feed() {
  if (!allPosts) return null;
  return (
    <>
      {allPosts && allPosts.map((post) => <Post key={post.url} post={post} />)}
    </>
  );
}
