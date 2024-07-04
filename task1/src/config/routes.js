import routes from "../constants/routes";
import Home from "../pages/home/Home";
import Members from "../pages/members/Members";

const approutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.members,
    Component: Members,
  },
];

export default approutes;
