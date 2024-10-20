import clsx from "clsx";
import { ClassValue } from "clsx";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(rawDate: string) {
  return format(parseISO(rawDate), "LLLL d, yyyy");
}
