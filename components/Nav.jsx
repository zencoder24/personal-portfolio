import { Navbar } from "flowbite-react";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import { NavbarCollapse } from "flowbite-react/lib/esm/components/Navbar/NavbarCollapse";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle";
import React from "react";

const Nav = () => {
  return (
    <Navbar fluid={true} className="bg-[#fffbf3]">
      <NavbarBrand>
        <span>Rodderick Garland</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink active={true} className=" hover:cursor-pointer">
          Home
        </NavbarLink>
        <NavbarLink className=" hover:cursor-pointer">About</NavbarLink>
        <NavbarLink className=" hover:cursor-pointer">Blog</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
