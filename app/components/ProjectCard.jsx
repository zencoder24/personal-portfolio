import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEarth } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  proj_name,
  proj_desc,
  src_code,
  live_site,
  image_src,
}) => {
  return (
    <div className="max-w-sm ">
      <div className="relative h-48 w-full">
        <Image
          src={image_src}
          alt={proj_name}
          fill
          className="!object-contain"
        />
      </div>
      <div className="my-2">
        <a href="#">
          <h5 className=" mb-4 text-center font-primary text-2xl font-bold tracking-tight text-slate-200">
            {proj_name}
          </h5>
        </a>
        <p className="mb-3 text-center font-secondary  font-normal text-white">
          {proj_desc}
        </p>
        <div className="project-links flex flex-col items-center">
          <a
            href={src_code}
            target="_blank"
            className="text-md inline-flex items-center gap-2 text-center align-middle font-bold text-slate-200 hover:text-primary   focus:outline-none "
          >
            Source Code
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a
            href={live_site}
            target="_blank"
            className="text-md inline-flex items-center gap-2 text-center align-middle font-bold text-slate-200 hover:text-primary   focus:outline-none "
          >
            Live Site
            <FontAwesomeIcon icon={faEarth} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
