import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import Button from "react-bootstrap/Button";

import "./navbar.css";
const appRoutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      {appRoutes.map((route) => {
        const [key, value] = route;
        return (
          <Button
          key={key}
          onClick={() => {
            navigate(value);
          }}
          variant="light"
          >
            {key}
          </Button>

          // <button
          //   key={key}
          //   onClick={() => {
          //     navigate(value);
          //   }}
          // >
          //   {key}
          // </button>
        );
      })}
    </div>
  );
};

export default Navbar;

{
  /* <Button variant="light">Light</Button>{' '} */
}
