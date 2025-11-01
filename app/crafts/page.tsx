import {
  ArticleItem,
  ArticleList,
  TweetArticle,
} from "@/components/common/Article";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "@/components/common/Post";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import { getCrafts } from "@/lib/mdx";

export default async function Crafts() {
  const crafts = (await getCrafts()).sort((a, b) => {
    const aDate = a.frontmatter.date ? new Date(a.frontmatter.date) : null;
    const bDate = b.frontmatter.date ? new Date(b.frontmatter.date) : null;

    if (aDate && bDate) {
      return compareDesc(aDate, bDate);
    }

    return 0;
  });

  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"🎨"} MoodText={"Feelin' artsy"} />
        <ArticleList title={"Crafts"}>
          {crafts.length > 0 ? (
            crafts.map((craft) => (
              <ArticleItem
                key={craft.slug}
                text={craft.frontmatter.title}
                href={craft.url}
                date={
                  craft.frontmatter.date
                    ? formatDate(craft.frontmatter.date)
                    : ""
                }
                className="rounded-md"
              />
            ))
          ) : (
            <div className="py-8 text-center">
              <div className="text-xl font-bold mb-2">
                🚧 Work in Progress 🚧
              </div>
              <p className="text-[#495057] dark:text-[#ced4da]">
                Exciting crafts coming soon! Please check back later.
              </p>
            </div>
          )}
        </ArticleList>
      </ContentContainer>
    </TweetArticle>
  );
}
