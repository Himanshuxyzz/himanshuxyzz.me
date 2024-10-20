"use client";
import Image from "next/image";
import React from "react";

const FeatureImg = ({ image, ...props }) => {
  return (
    <>
      <picture className="mb-2">
        <Image
          className="w-full rounded-lg transition-opacity opacity-0 duration-[2s]"
          src={image}
          alt="feature image"
          loading="lazy"
          {...props}
          onLoad={(e) => e.target.classList.remove("opacity-0")}
        />
      </picture>
    </>
  );
};

export default FeatureImg;
