"use client";
import { SocialLinks } from "@/lib/constant";
import Link from "next/link";
import React from "react";
import SpotifyNowPlaying from "../essentials/SpotifyNowPlaying";
import useSWR from "swr";

const Footer = () => {
  const { data, error, isLoading } = useSWR("/api/spotify");
  return (
    <footer className="w-content max-w-full mx-auto py-4 flex flex-col items-center gap-y-2">
      <div className="text-fluid--2 grid place-items-center gap-y-2 w-full">
        <div className="flex flex-wrap justify-center">
          {Object.keys(SocialLinks).map((key, idxs) => {
            const detail = SocialLinks[key];
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

      <div className="flex items-start gap-2 text-fluid--1 font-semibold text-ellipsis overflow-hidden">
        <SpotifyNowPlaying />
        {/* {data?.isPlaying ? (
          <Link
            href={data?.songUrl}
            className="flex flex-col items-center sm:flex-row"
            target="_blank"
          >
            <p className="mr-1">{data?.title} - </p>
            <p className="text-xs">{data?.artist}</p>
          </Link>
        ) : (
          (isLoading && <p className="animate-pulse">Loading...</p>) ||
          (error && <p className="animate-pulse">Error...</p>) ||
          !data.isPlaying ||
          (data.trackType !== "track" && (
            <p className="font-semibold">Offline</p>
          ))
        )} */}
        {data?.isPlaying && (
          <Link
            href={data?.songUrl}
            className="flex flex-col items-center sm:flex-row"
            target="_blank"
          >
            <p className="mr-1">{data?.title} - </p>
            <p className="text-xs">{data?.artist}</p>
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
