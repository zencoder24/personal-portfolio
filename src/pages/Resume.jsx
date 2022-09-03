import React from "react";
import { Helmet } from "react-helmet";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "../assets/resume/Rodderick Garland_Web_Devleoper_Resume.pdf";

const Resume = () => {
  return (
    <div className="py-40 px-8 flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content=" Resume section of a Portfolio Site built using React.js by Rodderick Garland"
        />
        <title>Rod Garland | Resume</title>
      </Helmet>
      <h3 className=" text-center text-white font-bold uppercase text-sm">
        Have a look at
      </h3>
      <h1 className=" text-white text-4xl text-center uppercase font-bold">
        My <span className=" text-calm-green">Resume</span>
      </h1>
      <Document file={resume}>
        <Page className="mx-4 mt-10 mb-8" height="450" pageNumber={1} />
      </Document>
      <a
        className="text-white border-none w-1/2 text-center p-2   rounded-xl mx-0 my-auto bg-slate-800 hover:bg-[#ACE6E6]"
        href={resume}
        download="Rod_Garland_Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button className="uppercase font-bold">Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
