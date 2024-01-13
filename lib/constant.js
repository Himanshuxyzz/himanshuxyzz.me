import { RxBackpack } from "react-icons/rx";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export const bioDetails = {
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

export const NavLinkRoutes = [
  { id: 1, route: "/", name: "Feed" },
  { id: 2, route: "/blog", name: "Blog" },
  { id: 3, route: "/crafts", name: "Crafts"},
];
