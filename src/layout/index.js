import React from "react";
import Footer from "./footer";
import Header from "./header";
import PublicRoutes from "../config/router";

const Layout = (props) => {
  return (
    <>
      <Header />
      <PublicRoutes />
      <Footer />
    </>
  );
};

export default Layout;
