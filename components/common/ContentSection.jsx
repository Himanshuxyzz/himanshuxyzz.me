import ContentWrapper from "@/components/layout/ContentWrapper";
import NavLink from "./NavLink";
import { NavLinkRoutes } from "@/lib/constant";

const NavTab = () => {
  return (
    <>
      <ul className="max-w-full grid grid-flow-col auto-cols-[1fr] items-center text-fluid--1 overflow-auto">
        {NavLinkRoutes.map((navlink) => {
          return (
            <li
              key={navlink.id}
              className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow"
            >
              <NavLink
                key={navlink.id}
                href={navlink.route}
                name={navlink.name}
              />
            </li>
          );
        })}
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
      {children}
    </ContentWrapper>
  );
};

export default ContentSection;
