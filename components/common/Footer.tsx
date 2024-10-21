"use client";
import { SocialLinks } from "@/lib/constant";
import { SpotifyData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const SpotifyNowPlaying = ({ spotifyData }: { spotifyData: SpotifyData }) => {
  if (!spotifyData || !spotifyData.isPlaying) {
    return (
      <div className="flex items-center space-x-2 dark:bg-[#212529] bg-[#f1f3f5] p-3 rounded-md shadow-md">
        <span className="text-fluid--1 font-semibold">
          Currently not playing anything
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2   dark:text-white p-2 rounded-md shadow-sm dark:shadow-none w-full justify-start">
      <div className="flex flex-row items-center gap-x-2">
        <span className="text-fluid--1 font-semibold">Now Playing,</span>
        <Link
          target="_blank"
          href={spotifyData.songUrl as any}
          className="font-semibold underline underline-offset-2 hover:text-[#1DB954] transition-all ease duration-200"
        >
          {spotifyData.title}
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  const { isLoading, data: spotifyData } = useQuery<SpotifyData>({
    queryKey: ["now-playing"],
    queryFn: () => fetch("/api/spotify").then((res) => res.json()),
    refetchInterval: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
  });

  return (
    <footer className="w-content max-w-full mx-auto py-4 flex flex-col items-center gap-y-4">
      {isLoading && (
        <div className="flex flex-row items-start justify-start w-full">
          <p className="text-fluid--1 text-left font-semibold">
            Loading spotify data...
          </p>
        </div>
      )}
      {!isLoading && spotifyData && (
        <SpotifyNowPlaying spotifyData={spotifyData} />
      )}
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
