import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Base from "../containers/base";
import * as action from "../store/actions";

const PageTwo = (props) => {
  const [number, setNumber] = useState("");

  return (
    <Base>
      <h2>Page 2</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.increase(number)}>Increase</button>
      <Link to="/one">
        {" "}
        <button>One</button>
      </Link>
    </Base>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (value) => dispatch(action.increaseCounter(value)),
  };
};

export default connect(null, mapDispatchToProps)(PageTwo);
