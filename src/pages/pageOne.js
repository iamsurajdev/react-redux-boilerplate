import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Base from "../containers/base";

const PageOne = (props) => {
  return (
    <Base>
      <h2>Page 1</h2>
      <h3>Live Counter: {props.test.counter}</h3>
      <Link to="/two">
        {" "}
        <button>Increase Counter</button>
      </Link>
    </Base>
  );
};

const mapStateToProps = (store) => {
  return { test: store.test };
};

export default connect(mapStateToProps)(PageOne);
