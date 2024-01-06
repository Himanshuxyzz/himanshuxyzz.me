import React from "react";
import Logo from "./Logo";
import { ThemeSwitch } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="border border-black p-2 z-10 sticky w-full top-0 flex items-center justify-between backdrop-saturate-150 backdrop-blur">
      <Logo />
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
