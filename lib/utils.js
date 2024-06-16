import clsx from "clsx";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(rawDate) {
  return format(parseISO(rawDate), "LLLL d, yyyy");
}



