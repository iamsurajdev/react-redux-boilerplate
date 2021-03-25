import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Base = ({ header, footer, children }) => {
  return (
    <>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </>
  );
};

export default Base;
