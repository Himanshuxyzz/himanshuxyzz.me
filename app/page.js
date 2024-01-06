import ContentWrapper from "@/components/ContentWrapper";
import Navbar from "@/components/Navbar";
import { ThemeSwitch } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <ContentWrapper className={"border border-black pt-2"}>
        Hello
      </ContentWrapper>
    </div>
  );
}
