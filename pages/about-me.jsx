import React from "react";
import { projectsData } from "../assets/projects/projects";
import { skillData } from "../assets/skills";
import { toolsData } from "../assets/tools";
import ProjectCard from "../components/ProjectCard";

const About = () => {
  return (
    <main className=" my-32 flex flex-col gap-y-16 text-gray-200">
      {/* About Me Section */}
      <section id="about-me ">
        <div id="about-me-title" className="mb-12">
          <h2 className=" text-4xl font-bold md:text-5xl">About Me</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div id="about-intro" className="flex flex-col gap-4">
            <p className="text-lg">
              My name is Rod Garland hailing from South Georgia. I am very
              passionate about Web Development and I love to use web
              technologies to build super cool products and designs.{" "}
            </p>
            <p className="text-lg">
              I also like writing blogs entreies related to the stuff that I
              have learned over the years in Web Development, so it can help
              other people of the Dev Community. Please head over to my{" "}
              <span className="text-orange-400 underline">Blog</span> and let me
              know what you think.
            </p>
            <p className="text-lg">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Used Section */}
      <section id="tech-used">
        <div id="tech-used-title-group" className="mb-12 ">
          <h2 className=" text-4xl font-bold md:text-5xl">Tech Used</h2>
        </div>

        <div id="tech-wrapper" className="">
          <div id="about-skills" className="">
            <h3 className="mb-4 text-2xl font-semibold">Skills:</h3>
            <ul className="mt-2 flex flex-wrap gap-4">
              {skillData.map((skill) => {
                return (
                  <li key={skill.id} className="">
                    {/* NOTE: This works! */}
                    <img
                      alt={skill.alt}
                      src={`https://img.shields.io/badge/${skill.icon}-${skill.bg_color}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logo_color}`}
                      className=" h-full w-full"
                    />
                    {/* FIXME: This does not? */}
                    {/* <Image
                      alt={skill.alt}
                      src={`https://img.shields.io/badge/${skill.icon}-${skill.bg_color}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logo_color}`}
                      height="100%"
                      width="100%"
                    /> */}
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="about-tools" className="mt-8">
            <h3 className="mb-4  text-2xl font-semibold">Tools:</h3>
            <ul className="mt-2 flex flex-wrap gap-4">
              {toolsData.map((tool) => {
                return (
                  <li key={tool.id} className="">
                    <img
                      alt={tool.alt}
                      src={`https://img.shields.io/badge/${tool.icon}-${tool.bg_color}?style=for-the-badge&logo=${tool.logo}&logoColor=${tool.logo_color}`}
                      className=" h-full w-full"
                    />
                    {/* <Image
                      alt={tool.alt}
                      src={`https://img.shields.io/badge/${tool.icon}-${tool.bg_color}?style=for-the-badge&logo=${tool.logo}&logoColor=${tool.logo_color}`}
                      height="100%"
                      width="100%"
                    /> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <div id="projects-title" className="mb-12">
          <h2 className=" text-4xl font-bold md:text-5xl">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2  md:gap-y-8 ">
          {projectsData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                proj_name={project.proj_name}
                proj_desc={project.proj_desc}
                src_code={project.src_code}
                live_site={project.live_site}
                image_src={project.image_src}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default About;
