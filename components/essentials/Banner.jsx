import Image from "next/image";
import React from "react";
import banner from "@/public/banner.svg";

const Banner = () => {
  return (
    <div className="relative w-full aspect-[3/1] ">
      <picture>
        <source srcSet={banner} type="image/svg+xml" />
        <Image
          className="saturate-200"
          fill
          src={banner}
          alt="Banner"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default Banner;
