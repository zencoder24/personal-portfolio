import React from "react";
import Nav from "./Nav";
import FooterSection from "./FooterSection";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <div className="mx-16 md:mx-24">
      <NavMenu />
      <Nav />
      {children}
      <FooterSection />
    </div>
  );
};

export default Layout;
