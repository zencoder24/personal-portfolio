import React from "react";
import HeroContent from "../components/HeroContent";
import Blob from "../components/Blob";

const Home = () => {
  return (
    <>
      <div className="mt-36 flex w-full flex-col items-center md:flex-row">
        <HeroContent />
        <Blob />
      </div>
    </>
  );
};

export default Home;
