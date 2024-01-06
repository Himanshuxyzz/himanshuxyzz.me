import Banner from "@/components/essentials/Banner";
import React, { Suspense } from "react";
import Loading from "../loading";
import ContentWrapper from "@/components/layout/ContentWrapper";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Banner />
      <ContentWrapper
        className={
          "w-content border border-red-500 flex flex-col items-center gap-2"
        }
      >
        <div className="flex justify-between">
          <Image />
          <Link />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
