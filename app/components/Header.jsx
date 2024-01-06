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
      <ContentWrapper className={"w-content border border-red-500 px-4"}>
        <div className="border border-emerald-600 flex items-center justify-end relative py-3 min-h-half-avatar">
          <div className="absolute top-0 left-0 -translate-y-1/2 w-avatar h-avatar ">
            <Image
              className="object-cover aspect-square rounded-full border-4 border-[#030507] dark:border-[#f1f3f5] w-full h-full"
              src={"/avatar.webp"}
              fill
              alt="profile"
            />
          </div>
          <Link className="font-bold" href={"#"}>
            resume
          </Link>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
