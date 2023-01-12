import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const icons = {
  envelope: faEnvelope,
  github: faGithub,
  linkedIn: faLinkedinIn,
};

const ContactItem = ({ icon, contactData }) => {
  const contactIcon = icons[icon];
  return (
    <div className="contactItem row my-4 flex items-center space-x-4 rounded-lg bg-gray-700 py-2 px-4 text-gray-200">
      <div className=" icon-container bg-calm-green rounded-full py-2 px-3">
        <FontAwesomeIcon className=" bg-gray-700" icon={contactIcon} />
      </div>
      <div className="contact-data">{contactData}</div>
    </div>
  );
};

export default ContactItem;
