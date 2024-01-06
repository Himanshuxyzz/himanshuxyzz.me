import ContentWrapper from "@/components/layout/ContentWrapper";
import Header from "./components/Header";

export default function Home() {
  return (
    <section className="h-full">
      <ContentWrapper className={"w-feature"}>
        <Header />
      </ContentWrapper>
    </section>
  );
}
