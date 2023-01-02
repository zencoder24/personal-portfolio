import React from "react";
import Blob from "../components/Blob";
import HeroContent from "../components/HeroContent";

export default function Home() {
  return (
    <>
      <div className="mt-36 flex w-full flex-col items-center md:flex-row">
        <HeroContent />
        <Blob />
      </div>
    </>
  );
}
