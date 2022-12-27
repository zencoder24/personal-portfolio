import React from "react";
import { Footer } from "flowbite-react";
import { FooterBrand } from "flowbite-react/lib/esm/components/Footer/FooterBrand";
import { FooterTitle } from "flowbite-react/lib/esm/components/Footer/FooterTitle";
import { FooterLinkGroup } from "flowbite-react/lib/esm/components/Footer/FooterLinkGroup";
import { FooterLink } from "flowbite-react/lib/esm/components/Footer/FooterLink";

const FooterSection = () => {
  return (
    <Footer className="bg-[#800020] rounded-none">
      <div className="w-full">
        <div className=" grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <span>Rodderick Garland</span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col={true}>
                <FooterLink href="#">Resume</FooterLink>
                <FooterLink href="#">Projects</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="blog" />
              <FooterLinkGroup col={true}>
                <FooterLink href="#">Latest Blog</FooterLink>
                <FooterLink href="#">Trending</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="socials" />
              <FooterLinkGroup col={true}>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">LinkedIn</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;
