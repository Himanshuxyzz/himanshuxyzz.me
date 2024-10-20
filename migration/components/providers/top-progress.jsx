"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopProgress = ({ children }) => {
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
