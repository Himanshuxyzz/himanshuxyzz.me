import { RxBackpack } from "react-icons/rx";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


export const bioDetails = {
  work: {
    icon: () => (
      <RxBackpack title="work" size={"1rem"} />
    ),
    text: () => {
      return (
        <>
          <p
          >
            Available
          </p>
        </>
      );
    },
  },
  birthday: {
    icon: () => (
      <FaBirthdayCake title="birthday" size={"1rem"}/>
    ),
    text: () => <p >May 11th</p>,
  },
  location: {
    icon: () => (
      <IoLocationSharp title="location" size={"1rem"}/>
    ),
    text: () => <p >India</p>,
  },
};

