import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Work from "./pages/Works";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import store from "./data";
import "./index.css";

export default () => {
  const routes = [
    {
      path: "/",
      exact: true,
      children: <Home />,
    },
    {
      path: "/work",
      children: <Home />,
    },
    {
      path: "/friends",
      children: <Home />,
    },
    {
      path: "/detail/:id",
      children: <Detail />,
    },
  ];

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          {routes.map((el) => {
            return <Route {...el} />;
          })}
        </Switch>
      </Router>
    </Provider>
  );
};
