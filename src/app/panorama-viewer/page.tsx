"use client";

import Question from "@/components/Question";
import PanoramaViewer from "@/components/panorama-viewer/panorama-viewer";

const Page = () => {
  return (
    <div>
      <Question>
        Upload an equirectangular 360° panorama image to explore it
        interactively. Drag to look around and scroll to zoom in and out.
      </Question>
      <PanoramaViewer />
    </div>
  );
};

export default Page;
