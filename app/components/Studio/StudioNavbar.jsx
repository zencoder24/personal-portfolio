import React from "react";
import Link from "next/link";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const StudioNavbar = (props) => {
  return (
    <div className="bg-black text-white">
      <div className="py-4 px-4">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-x-2 text-orange-400"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
          Go Back to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
