"use client";
import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "next-share";

const ShareButton = ({ slug, title, description }) => {
  return (
    <div id="social-interaction" className="flex flex-row gap-x-4">
      <p className="text-xl">Share:</p>
      <LinkedinShareButton url={`www.rodthedev.com/blogs/${slug}`}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={`www.rodthedev.com/blogs/${slug}`} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url={`www.rodthedev.com/blogs/${slug}`}
        quote={description}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default ShareButton;
