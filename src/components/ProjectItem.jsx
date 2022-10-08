import React from "react";
import shortlyImage from "../assets/projectImages/shortly.png";
import entertainmentImage from "../assets/projectImages/entapp.png";
import iptrackImage from "../assets/projectImages/ipaddressImage.png";
import rmtImage from "../assets/projectImages/rmtImage.png";
import clockImage from "../assets/projectImages/clockappImage.png";

const images = {
  shortly: shortlyImage,
  entertainment: entertainmentImage,
  iptrack: iptrackImage,
  rmt: rmtImage,
  clock: clockImage,
};

const ProjectItem = ({ img, project, srcCode, liveSite, desc }) => {
  const projectImage = images[img];
  return (
    <>
      <div className=" my-8 transition-colors duration-300 shadow-calm-green shadow-md  container rounded-xl w-full md:w-[90%] lg:w-2/3 p-4 mx-auto ">
        <div className="project-image ">
          <img
            className="rounded-xl"
            src={projectImage}
            alt="Shortly Project"
          />
        </div>
        <div className="project-desc text-white text-center">
          <h2 className="font-bold text-xl my-2">{project}</h2>
          <p className=" text-justify text-lg">{desc}</p>
        </div>
        <div className="button-group flex justify-around my-5 text-white">
          <a href={srcCode}>
            <a
              className=" hover:bg-calm-green bg-slate-700 rounded-full px-2 py-2  uppercase font-bold"
              target="_blank"
              rel="noreferrer noopener"
              href={srcCode}
            >
              Source Code
            </a>
          </a>
          <a href={liveSite}>
            <a
              className="hover:bg-calm-green bg-slate-700 rounded-full px-2 py-2  uppercase font-bold"
              target="_blank"
              rel="noreferrer noopener"
              href={liveSite}
            >
              Live Site
            </a>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
