import React from "react";
import Logo from "./essentials/Logo";
import { ThemeSwitch } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="p-2 z-10 sticky w-full top-0 flex items-center justify-between backdrop-saturate-150 backdrop-blur">
      <Logo />
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
