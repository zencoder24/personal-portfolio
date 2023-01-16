import GlassButton from "./GlassButton";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="w-full md:h-screen  md:w-[50%]">
      <main className="flex h-full flex-col gap-8 font-nunito">
        <div>
          <h1 className=" font-nunito text-4xl font-extrabold text-gray-200 md:text-5xl">
            Hello, My Name is{" "}
            <span className=" bg-gradient-to-tr from-orange-400 to-rose-400 bg-clip-text font-nunito text-transparent">
              Rod Garland
            </span>{" "}
            and I'm A{" "}
            <span className=" bg-gradient-to-tr from-orange-400 to-rose-400 bg-clip-text font-nunito text-transparent">
              {" "}
              Full-Stack Web Developer
            </span>
          </h1>
          <hr className="  h-1 w-24 rounded border-0 bg-gradient-to-r from-orange-400 to-rose-400 md:my-4"></hr>
          <div className="">
            <p className="font-lora text-lg font-semibold text-white">
              I really love to build really cool things for the web. It is
              mission to build exceptional digital experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <Link
            href="/about-me"
            className="group relative  inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-br from-orange-400 to-rose-400 px-8 py-2 font-nunito text-lg  font-bold  text-white"
          >
            About Me
          </Link>
          <GlassButton
            linkPage="/blogs"
            mobileDisplay="inline-flex"
            btnText="Blog"
          />
        </div>
        {/* <blockquote class="my-2 border-l-4 border-orange-400  p-4  ">
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon
              icon={faPen}
              className="inline text-sm text-white"
            />
            <p class="inline text-sm font-medium italic leading-relaxed text-gray-900 dark:text-white">
              Latest Post:
            </p>
          </div>
          <div>
            <h3 className="cursor-pointer text-lg font-semibold text-orange-400 underline">
              A Blog Post About React
            </h3>
            <p className="italic text-white ">
              A blog post talking about React
            </p>
          </div>
        </blockquote> */}
      </main>
    </div>
  );
};

export default HeroContent;