import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="flex flex-col text-center py-4 gap-y-2 md:flex-row md:gap-y-0">
      <p className=" md:w-1/3">Designed And Developed by Rodderick Garland</p>
      <p className=" md:w-1/3">Copyright &#169; 2023</p>
      <div
        id="socials"
        className="flex flex-row justify-center gap-3 md:gap-6 md:w-1/3"
      >
        <FontAwesomeIcon icon={faGithub} className="text-xl" />
        <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
      </div>
    </footer>
  );
};

export default FooterSection;
