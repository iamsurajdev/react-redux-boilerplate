import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Base = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Base;
