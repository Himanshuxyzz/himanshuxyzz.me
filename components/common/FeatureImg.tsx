"use client";
import Image, { ImageProps } from "next/image";
import React from "react";

type FeatureImgProps = {
  image: string;
} & Omit<ImageProps, "src" | "alt">;

const FeatureImg: React.FC<FeatureImgProps> = ({ image, ...props }) => {
  return (
    <>
      <picture className="mb-2">
        <Image
          className="w-full rounded-lg transition-opacity opacity-0 duration-[2s]"
          src={image}
          alt="feature image"
          loading="lazy"
          {...props}
          onLoad={(e) =>
            (e.target as HTMLImageElement).classList.remove("opacity-0")
          }
        />
      </picture>
    </>
  );
};

export default FeatureImg;
