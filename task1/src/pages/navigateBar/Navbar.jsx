import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import "./navbar.css";
const appRoutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      {appRoutes.map((route) => {
        const [key, value] = route;
        return (
          <button
            key={key}
            onClick={() => {
              navigate(value);
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
