import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './Dashboard.module.css'

const DashboardNav = () => {
  return (
    <div className={css.dashboardNav}>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="staff">Staff</NavLink>
      <Outlet/>
    </div>
  );
};

export default DashboardNav;
