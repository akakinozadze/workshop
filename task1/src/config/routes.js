// import { Component } from "react";
import routes from "../constants/routes";
import Home from "../pages/Home";
import Members from "../pages/Members";

const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.members,
    Component: Members,
  },
];

export default appRoutes;
