import React from "react";
import { Link } from "react-router-dom";
import Base from "../containers/base";

const Home = () => {
  return (
    <Base>
      <h1>Home</h1>
      <Link to="/one">
        {" "}
        <button>One</button>
      </Link>
      <Link to="/two">
        {" "}
        <button>Two</button>
      </Link>
    </Base>
  );
};

export default Home;
