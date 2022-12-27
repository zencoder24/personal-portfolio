import { Button } from "flowbite-react";
import React from "react";

const HeroContent = () => {
  return (
    <div className=" bg-[#fffbf3] w-1/2 h-screen">
      <main className="flex flex-col justify-center items-center h-full gap-6">
        <div>
          <h2 className=" text-center">Hello, My Name is</h2>
          <h1 className=" text-5xl ">Rodderick Garland</h1>
        </div>
        <div className="flex flex-row gap-4">
          <Button size="xl" pill={true}>
            About
          </Button>
          <Button size="xl" outline={true} pill={true}>
            Blog
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HeroContent;
