import { allPosts } from "@/.contentlayer/generated";
import Post from "@/components/blog/Post";

const About = () => {
  return (
    <>
      {allPosts.map((post) => (
        <Post key={post.url} post={post} />
      ))}
    </>
  );
};

export default About;
