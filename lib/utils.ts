import { ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(rawDate: string) {
  return format(parseISO(rawDate), "LLLL d, yyyy");
}

export interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  songUrl?: string;
}
