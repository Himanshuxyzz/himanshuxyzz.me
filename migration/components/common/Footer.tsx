import { SocialLinks } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-content max-w-full mx-auto py-4 flex flex-col items-center gap-y-2">
      <div className="text-fluid--2 grid place-items-center gap-y-2 w-full">
        <div className="flex flex-wrap justify-center">
          {Object.keys(SocialLinks).map((key, idxs) => {
            const detail = SocialLinks[key as keyof typeof SocialLinks];
            return (
              <React.Fragment key={idxs}>
                <Link
                  className="w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4 hover:scale-125 transition-all ease duration-200"
                  href={detail.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={detail.onHoverText}
                >
                  {detail.icon()}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
