import { cn } from "@/utils";
import Link from "next/link";

export function NavigateBack({
  text,
  href,
  classsName,
}: {
  text: string;
  href: string;
  classsName?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-body font-medium px-3 py-2 rounded-xl text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#FAFAF7] hover:bg-[#F5F5F0] dark:hover:bg-[#292524] transition-all duration-200",
        classsName
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      {text}
    </Link>
  );
}
