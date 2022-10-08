import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Home of Portfolio Site built using React.js by Rodderick Garland"
        />
        <title>Rod Garland | Web Developer</title>
      </Helmet>
      <h2 className=" text-center uppercase font-bold text-3xl md:text-4xl text-white ">
        Hello!<span>&#9996;</span>
      </h2>
      <h2 className="text-center uppercase font-bold text-3xl md:text-4xl text-white ">
        I'm <span className="text-calm-green">Rod Garland</span>
      </h2>
      <p className="font-bold text-calm-green uppercase text-center text-xl md:2xl:">
        Full Stack Web Developer
      </p>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/zencoder24"
        className="social icons justify-center space-x-3 flex"
      >
        <div className=" bg-white/[.1] hover:bg-calm-green p-2 rounded-full flex justify-center cursor-pointer">
          <FontAwesomeIcon className=" text-xl text-white" icon={faGithub} />
        </div>
        <a
          href="https://www.linkedin.com/in/rodderick-garland-58ba19160/"
          target="_blank"
          rel="noreferrer noopener"
          className=" bg-white/[.1] hover:bg-calm-green p-2 rounded-full flex justify-center cursor-pointer"
        >
          <FontAwesomeIcon
            className=" text-xl text-white"
            icon={faLinkedinIn}
          />
        </a>
      </a>
    </div>
  );
};

export default Home;
