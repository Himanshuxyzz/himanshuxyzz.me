import Banner from "@/components/essentials/Banner";
import React from "react";
import ContentWrapper from "@/components/layout/ContentWrapper";
import AvatarWrapper from "../layout/AvatarWrapper";

const Header = () => {
  return (
    <ContentWrapper className={"w-feature"}>
      <header>
        <Banner />
        <ContentWrapper className={"w-content px-4"}>
          <AvatarWrapper
            name={"Himanshu Toppo"}
            bio={"I bring ideas to life with code! ✨"}
          />
        </ContentWrapper>
      </header>
    </ContentWrapper>
  );
};

export default Header;
