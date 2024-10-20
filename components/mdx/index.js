import Image from "next/image";
import FeatureImg from "@/components/common/FeatureImg";
import React from "react";

const customImage = ({ ...props }) => {
  return <Image {...props} />;
};

const NameHighlight = ({ children }) => {
  return (
    <span className="font-bold text-link-bg decoration-4 underline-offset-2">
      {children}
    </span>
  );
};

const MdxComponent = {
  img: customImage,
  NameHighlight,
  FeatureImg,
};

export default MdxComponent;
