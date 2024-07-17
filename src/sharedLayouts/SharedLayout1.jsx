import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const SharedLayout1 = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout1;
