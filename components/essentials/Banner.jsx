import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full aspect-[3/1] saturate-150">
      <Image fill src={"/banner.svg"} alt="banner" />
    </div>
  );
};

export default Banner;
