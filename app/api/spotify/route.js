import { currentlyPlayingSong } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await currentlyPlayingSong();

  if (!response.status === 204 || !response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const result = await response.json();

  

  const data = {
    isPlaying: result?.is_playing,
    title: result?.item?.name,
    songUrl: result?.item?.external_urls?.spotify,
    albumImg: result?.item?.album?.images[0]?.url,
    artist: result?.item?.artists?.map((artist) => artist?.name).join(","),
    trackType:result?.currently_playing_type
  };

  return NextResponse.json(data);
}
