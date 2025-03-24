import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

export function dateDiffInYears(dateOld: Date, dateNew: Date) {
  const yearNew = dateNew.getFullYear();
  const monthNew = dateNew.getMonth();
  const dnew = dateNew.getDate();
  const yearOld = dateOld.getFullYear();
  const monthOld = dateOld.getMonth();
  const dold = dateOld.getDate();
  let difference = yearNew - yearOld;
  if (monthOld > monthNew) difference--;
  else {
    if (monthOld == monthNew) {
      if (dold > dnew) difference--;
    }
  }
  return difference;
}
