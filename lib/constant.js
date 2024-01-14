import { RxBackpack } from "react-icons/rx";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin,FaTwitter,FaGithub,FaInstagram } from "react-icons/fa6";

export const bioDetailsIcon = {
  work: {
    icon: () => <RxBackpack title="work" size={"1rem"} />,
    text: () => <p>Available</p>,
  },
  birthday: {
    icon: () => <FaBirthdayCake title="birthday" size={"1rem"} />,
    text: () => <p>May 11th</p>,
  },
  location: {
    icon: () => <IoLocationSharp title="location" size={"1rem"} />,
    text: () => <p>India</p>,
  },
};

export const SocialLinks = {
  linkedin: {
    icon: () => <FaLinkedin title="linkedin" size={"1.3rem"} />,
    link: 'https://www.linkedin.com/in/himanshu-toppo/',
  },
   x: {
    icon: () => <FaTwitter title="twitter" size={"1.3rem"} />,
    link: 'https://twitter.com/himanshu_toppo',
  },
    github: {
    icon: () => <FaGithub title="github" size={"1.3rem"} />,
    link: 'https://github.com/himanshuxyzz',
  },
      instagram: {
    icon: () => <FaInstagram title="github" size={"1.3rem"} />,
    link: 'https://instagram.com/savage_launda__',
  },
};

export const NavLinkRoutes = [
  { id: 1, route: "/", name: "Feed" },
  { id: 2, route: "/blog", name: "Blog" },
  { id: 3, route: "/crafts", name: "Crafts" },
];
