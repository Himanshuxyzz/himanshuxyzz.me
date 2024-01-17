import clsx from "clsx";
import { format, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
   return twMerge(clsx(inputs))
}


export function formatDate(rawDate) {
return format(parseISO(rawDate), "LLLL d, yyyy")
}