import { allPosts } from "contentlayer/generated";

// ^ You're probably going to get an error, but we'll fix it later
import { ArticleItem } from "../blog/page";

// console.log(allPosts);
// console.log(allPosts);

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        // <PostCard key={idx} {...post} />
        <ArticleItem
          key={idx}
          text={post.title}
          href={post.url}
          date={new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
        />
      ))}
    </div>
  );
}
