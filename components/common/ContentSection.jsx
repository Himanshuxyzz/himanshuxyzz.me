import ContentWrapper from "@/components/layout/ContentWrapper";
import Link from "next/link";
import NavLink from "./NavLink";
import { NavLinkRoutes } from "@/lib/constant";

const NavTab = () => {
  console.log(NavLinkRoutes);
  return (
    <>
      <ul className="max-w-full grid grid-flow-col auto-cols-[1fr] items-center text-fluid--1">
        <li className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow">
          <NavLink href={"/"} name={"About"} />
        </li>

        <li className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow">
          <NavLink href={"/skills"} name={"Skills"} />
        </li>

        <li className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow">
          <Link
            key={Math.floor(Math.random() * 40)}
            href={"/"}
            className="font-bold grid place-items-center w-full h-full text-[#030507] dark:text-[#868e96]  hover:no-underline focus-visible:outline-0 focus-visible:bg-[#f1f3f5]"
          >
            {/* <span className="border-b-link-bg dark:text-[#f1f3f5] text-[#030507]">
              About
            </span> */}
            <span className="p-2 px-4 border-b-4 border-transparent">
              About
            </span>
          </Link>
        </li>

        <li className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow">
          <Link
            key={Math.floor(Math.random() * 40)}
            href={"/"}
            className="font-bold grid place-items-center w-full h-full text-[#030507] dark:text-[#868e96]  hover:no-underline focus-visible:outline-0 focus-visible:bg-[#f1f3f5]"
          >
            {/* <span className="border-b-link-bg dark:text-[#f1f3f5] text-[#030507]">
              About
            </span> */}
            <span className="p-2 px-4 border-b-4 border-transparent">
              About
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

const ContentSection = ({ children }) => {
  return (
    <ContentWrapper
      className={"w-content flex flex-col justify-center pt-4 gap-8 "}
    >
      <NavTab />
      {/* <About /> */}
      {children}
    </ContentWrapper>
  );
};

export default ContentSection;
