import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack, faPen } from "@fortawesome/free-solid-svg-icons";

const HeroContent = () => {
  return (
    <div className="h-screen w-full  md:w-[50%]">
      <main className="flex h-full flex-col gap-8">
        <div>
          <h1 className=" text-4xl font-extrabold text-white md:text-5xl">
            Hello, My Name is{" "}
            <span className="bg-gradient-to-tr from-orange-400 to-rose-400 bg-clip-text text-transparent">
              Rod Garland
            </span>{" "}
            and I'm A{" "}
            <span className="bg-gradient-to-tr from-orange-400 to-rose-400 bg-clip-text text-transparent">
              {" "}
              Full-Stack Web Developer
            </span>
          </h1>
          <hr class="  h-1 w-24 rounded border-0 bg-gradient-to-r from-orange-400 to-rose-400 md:my-4"></hr>
          <div className="">
            <p className="text-lg font-semibold text-white">
              I love to understand the web and build thing for fun. This is more
              text that will go here.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <button className="group  relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-br from-orange-400 to-rose-400 px-8 py-2 text-lg text-sm font-medium  text-white">
            About Me
          </button>
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 to-rose-400 p-0.5 px-8 py-2 text-lg font-medium text-white">
            Blog
          </button>
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
