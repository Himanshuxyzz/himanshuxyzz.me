import { allCrafts } from "@/.contentlayer/generated";
import {
  ArticleItem,
  ArticleList,
  TweetArticle,
} from "@/components/common/Article";
import {
  AuthorInfo,
  Content,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "@/components/common/Post";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";

export default function Crafts() {
  const crafts = allCrafts.sort((a, b) => {
    if (a.date && b.date) {
      return compareDesc(new Date(a.date), new Date(b.date));
    } else {
      return 0;
    }
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
                key={craft._id}
                text={craft.title}
                href={craft.url}
                date={craft.date ? formatDate(craft.date) : ""}
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
