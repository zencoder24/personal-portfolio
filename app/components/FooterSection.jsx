import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="flex flex-col gap-y-2 py-4 text-center text-white md:flex-row md:gap-y-0">
      <p className=" md:w-1/3">Designed And Developed by Rodderick Garland</p>
      <p className=" md:w-1/3">Copyright &#169; 2023</p>
      <div
        id="socials"
        className="flex flex-row justify-center gap-3 md:w-1/3 md:gap-6"
      >
        <a href="https://github.com/zencoder24" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/rodderick-garland-58ba19160/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
        <a href="https://twitter.com/RoddTheDev" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
