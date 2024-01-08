import ContentWrapper from "@/components/layout/ContentWrapper";
import Link from "next/link";
import React from "react";
import avatar from "@/public/avatar.webp";
import Image from "next/image";

const NavTab = () => {
  return (
    <>
      <ul className="max-w-full grid grid-flow-col auto-cols-[1fr] items-center text-fluid--1">
        <li className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow">
          <Link
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
            href={"/skills"}
            className="font-bold grid place-items-center w-full h-full text-[#030507] dark:text-[#868e96]  hover:no-underline focus-visible:outline-0 focus-visible:bg-[#f1f3f5]"
          >
            {/* <span className="border-b-link-bg dark:text-[#f1f3f5] text-[#030507]">
              About
            </span> */}
            <span className="p-2 px-4 border-b-4 border-transparent">
              Skills
            </span>
          </Link>
        </li>

        <li className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]  flex-grow">
          <Link
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

// const About = () => {
//   return (
//     <article
//       className={` grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full hover:bg-surface-2 card-transition`}
//     >
//       <a className="w-10 h-10">
//         <Image
//           className="rounded-full w-10 h-10 object-cover"
//           width={40}
//           height={40}
//           src={avatar}
//           alt="user-profile"
//         />
//       </a>
//       <div className="grid gap-y-1 leading-tight">
//         <div className="flex gap-x-2 text-fluid--1 items-center text-[#868e96]">
//           <a className="hover:underline font-bold text-[#495057] dark:text-[#f1f3f5]">
//             Himanshu
//           </a>
//           <span>.</span>
//           <p className="font-bold">28.May.2023</p>
//         </div>
//         <div className="mb-2">
//           <div className="py-1 px-3 inline-flex items-center gap-1 bg-[#dee2e6] dark:bg-[#495057] rounded-full">
//             <span>🌴</span>
//             <span className="text-fluid--2 font-bold">Feelin' fresh</span>
//           </div>
//         </div>

//         <h2 className="mb-1 font-bold text-fluid-1">Hello World 👋</h2>
//         <p className="mb-4">
//           I am{" "}
//           <span className=" font-bold text-link-bg decoration-4 underline-offset-2">
//             Himanshu Toppo
//           </span>
//           , based in india 🇮🇳 , i am a developer who loves to bring ideas to
//           life using modern web technologies, i enjoy learning new tools and
//           technologies , and i am Currently looking into learning backend and
//           databases while also solidifying my knowledge of front-end
//           development.
//         </p>

//         {/* <picture className="mb-2">
//           <img
//             className="w-full rounded-lg  "
//             alt="feature-img-about"
//             height="500px"
//             src={feature}
//             loading="lazy"
//             decoding="async"
//           />
//         </picture> */}
//       </div>
//     </article>
//   );
// };

const MainSection = () => {
  return (
    <ContentWrapper
      className={"w-content flex flex-col justify-center pt-4 gap-8 "}
    >
      <NavTab />
      {/* <About /> */}
    </ContentWrapper>
  );
};

export default MainSection;
