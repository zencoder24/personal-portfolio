import React from "react";
import Nav from "./Nav";
import FooterSection from "./FooterSection";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      <Nav />
      {children}
      <FooterSection />
    </>
  );
};

export default Layout;
