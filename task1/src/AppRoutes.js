import React from "react";
import { Route, Routes } from "react-router-dom";
import approutes from "./config/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {approutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
