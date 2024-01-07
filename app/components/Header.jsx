import Banner from "@/components/essentials/Banner";
import React from "react";
import ContentWrapper from "@/components/layout/ContentWrapper";
import AvatarWrapper from "../../components/layout/AvatarWrapper";

const Header = () => {
  return (
    <div>
      <Banner />
      <ContentWrapper className={"w-content px-4 grid"}>
        <AvatarWrapper />
      </ContentWrapper>
    </div>
  );
};

export default Header;
