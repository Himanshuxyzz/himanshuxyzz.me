import Banner from "@/components/essentials/Banner";
import React from "react";
import ContentWrapper from "@/components/layout/ContentWrapper";
import Avatar from "../../components/essentials/Avatar";

const Header = () => {
  return (
    <div>
      <Banner />
      <ContentWrapper className={"w-content border border-red-500 px-4"}>
        <Avatar />
      </ContentWrapper>
    </div>
  );
};

export default Header;
