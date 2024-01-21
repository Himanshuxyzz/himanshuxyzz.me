import { SocialLinks } from "@/lib/constant";
import Link from "next/link";
import React from "react";
import SpotifyNowPlaying from "../essentials/SpotifyNowPlaying";

const Footer = () => {
  return (
    <footer className="w-content max-w-full mx-auto py-4">
      <div className="text-fluid--2 grid place-items-center gap-y-2 w-full">
        <div className="flex flex-wrap justify-center">
          {Object.keys(SocialLinks).map((key) => {
            const detail = SocialLinks[key];
            return (
              <>
                <Link
                  className="w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4 hover:scale-125 transition-all ease duration-200"
                  href={detail.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={detail.onHoverText}
                >
                  {detail.icon()}
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <SpotifyNowPlaying />
        {/* <p>©2024 all rights reserved</p> */}
      </div>
    </footer>
  );
};

export default Footer;
