import React from "react";
import Nav from "./Nav";
import FooterSection from "./FooterSection";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <FooterSection />
    </>
  );
};

export default Layout;
