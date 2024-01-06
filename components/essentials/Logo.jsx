import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} >
      <Image width={54} height={45} src={"/logo.svg"} alt="Logo" />
    </Link>
  );
};

export default Logo;
