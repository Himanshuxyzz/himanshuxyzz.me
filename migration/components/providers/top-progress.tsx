"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

type TopProgressProps = {
  children: React.ReactNode;
};

const TopProgress: React.FC<TopProgressProps> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#de1d8d"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default TopProgress;
