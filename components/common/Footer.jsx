import { SocialLinks } from "@/lib/constant";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-content max-w-full mx-auto py-4 text-text-3">
      <div className="text-fluid--2 grid place-items-center gap-y-2 w-full">
        <div className="flex flex-wrap justify-center">
          {Object.keys(SocialLinks).map((key) => {
            const detail = SocialLinks[key];
            return (
              <>
                <a
                  className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
                  href={detail.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Come follow me on Twitter!"
                >
                  {detail.icon()}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
