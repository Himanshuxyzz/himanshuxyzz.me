import React from "react";
import Logo from "../essentials/Logo";
import { ThemeSwitch } from "../essentials/theme-toggle";

const Navbar = () => {
  return (
    <nav className="p-2 z-10 sticky w-full top-0 flex items-center justify-between ">
      <div className="absolute inset-0 backdrop-saturate-150 blur-md bg-white/5 dark:bg-[#16191d]/5" />
      <div className="relative z-10 flex w-full items-center justify-between">
        <Logo />
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
