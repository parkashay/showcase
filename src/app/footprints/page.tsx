"use client";
import Question from "@/components/Question";
import React, { useState } from "react";

type Point = {
  x: number;
  y: number;
};
const Page = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [poppedPoints, setPoppedPoints] = useState<Point[]>([]);
  const addPoints = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { pageX, pageY } = e;
    setPoints([...points, { x: pageX, y: pageY }]);
    setPoppedPoints([]);
  };

  const undo = () => {
    const tempPoints = [...points];
    if (!tempPoints.length) return;
    const poppedPoint = tempPoints.pop();
    if (!poppedPoint) return;
    setPoppedPoints([...poppedPoints, poppedPoint]);
    setPoints(tempPoints);
  };

  const redo = () => {
    if (!poppedPoints.length) return;
    const newPoppedPoints = [...poppedPoints];
    const poppedPoint = newPoppedPoints.pop();
    setPoppedPoints(newPoppedPoints);
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
  };

  return (
    <div>
      <Question>
        When user clicks on the area, then points appear on the screen. The
        points can be erased using the UNDO button and can be redrawn using the
        REDO button.
      </Question>
      <div className="flex gap-2 my-4">
        <button
          className="px-4 py-2 text-sm font-body font-medium rounded-xl border border-[#E7E5E4] dark:border-[#44403C] text-[#1C1917] dark:text-[#FAFAF7] hover:bg-[#F5F5F0] dark:hover:bg-[#292524] transition-colors"
          onClick={undo}
        >
          Undo
        </button>
        <button
          className="px-4 py-2 text-sm font-body font-medium rounded-xl border border-[#E7E5E4] dark:border-[#44403C] text-[#1C1917] dark:text-[#FAFAF7] hover:bg-[#F5F5F0] dark:hover:bg-[#292524] transition-colors"
          onClick={redo}
        >
          Redo
        </button>
      </div>
      <div
        className="w-full h-[70vh] rounded-2xl border-2 border-dashed border-[#D6D3D1] dark:border-[#44403C] bg-white dark:bg-[#1C1917]/50 cursor-crosshair transition-colors hover:border-[#B45309]/40 dark:hover:border-[#F59E0B]/40"
        onClick={(e) => addPoints(e)}
      >
        {points.map((point, index) => (
          <span
            key={index}
            className="absolute h-3 w-3 rounded-full bg-[#F59E0B] shadow-glow animate-scale-in"
            style={{
              left: point.x + "px",
              top: point.y + "px",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Page;
