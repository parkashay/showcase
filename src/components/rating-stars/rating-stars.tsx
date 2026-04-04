"use client";

import { useState } from "react";

export default function RatingStars({
  rating,
  setRating,
}: {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ratingStatus = ["Bad", "Fair", "Good", "Very Good", "Excellent"];
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => handleRatingChange(star)}
          onMouseOver={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
          className="relative flex items-center justify-center group"
        >
          {hoveredStar === star && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg px-2.5 py-1 text-xs font-body font-medium whitespace-nowrap bg-[#1C1917] dark:bg-[#292524] text-[#FAFAF7] shadow-warm-md animate-fade-in">
              {ratingStatus[star - 1]}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1C1917] dark:bg-[#292524]" />
            </span>
          )}
          <StarIcon fill={Boolean(star <= rating || star <= hoveredStar)} />
        </button>
      ))}
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement> | { fill: boolean }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={props.fill ? "#F59E0B" : "none"}
      stroke={props.fill ? "#D97706" : "#D6D3D1"}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 hover:scale-110"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
