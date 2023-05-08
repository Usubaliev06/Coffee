import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="staff">Staff</NavLink>
      <Outlet/>
    </div>
  );
};

export default DashboardNav;
