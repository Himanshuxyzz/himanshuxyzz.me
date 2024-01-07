import Image from "next/image";
import React from "react";
import banner from "@/public/banner.svg";

const Banner = () => {
  return (
    <div className="relative w-full aspect-[3/1] ">
      <Image
        className="saturate-200"
        fill
        src={banner}
        alt="banner"
        priority="true"
      />
    </div>
  );
};

export default Banner;
