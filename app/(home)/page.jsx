import React from "react";
import About from "./_components/About";

const page = ({ slug }) => {
  console.log(slug);
  return (
    <>
      <About />
      {/* <About /> */}
    </>
  );
};

export default page;
