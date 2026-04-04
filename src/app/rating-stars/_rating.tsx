"use client";
import RatingStars from "@/components/rating-stars/rating-stars";
import { useState } from "react";

export function Rating() {
  const [rating, setRating] = useState(0);
  return (
    <section className="my-12">
      <RatingStars rating={rating} setRating={setRating} />
      <div className="my-6 font-body text-sm font-medium text-[#78716C] dark:text-[#A8A29E]">
        Applied Rating: <span className="text-[#B45309] dark:text-[#F59E0B] font-semibold">{rating}</span>
      </div>
    </section>
  );
}
