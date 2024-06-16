import Image from "next/image";
import React from "react";

const FeatureImg = ({ image, ...props }) => {
  return (
    <>
      <picture className="mb-2">
        <Image
          className="w-full rounded-lg"
          src={image}
          alt="feature image"
          loading="lazy"
          {...props}
        />
      </picture>
    </>
  );
};

export default FeatureImg;
