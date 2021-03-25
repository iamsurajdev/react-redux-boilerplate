import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Route } from "react-router-dom";
import Base from "../containers/base";

export const AuthLayout = withRouter((props) => {
  let pathName = props.children.props.location.pathname;
  const [View, setView] = useState(null);
  useEffect(() => {
    setView(
      localStorage.getItem("access_token") ? (
        props.children
      ) : (
        <Redirect to="/login" />
      )
    );
  }, [props]);

  return (
    <Base header footer pathName={pathName}>
      {View}
    </Base>
  );
});

export const FrontLayout = withRouter((props) => {
  let pathName = props.children.props.location.pathname;
  return (
    <Base header footer pathName={pathName}>
      {props.children}
    </Base>
  );
});

export const AlreadyLoginLayout = withRouter((props) => {
  let pathName = props.children.props.location.pathname;
  return (
    <Base header pathName={pathName}>
      {localStorage.getItem("access_token") ? (
        <Redirect exact to="/" />
      ) : (
        props.children
      )}
    </Base>
  );
});

export const AppRouter = withRouter(
  ({ component: Component, layout: Layout, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Layout>
            <Component {...props}></Component>
          </Layout>
        </>
      )}
    ></Route>
  )
);
