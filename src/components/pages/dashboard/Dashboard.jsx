import React from "react";
import css from "./Dashboard.module.css";
import DashboardNav from "./DashboardNav";


const Dashboard = () => {
  return (
    <div className={css.DashboardWrapper}>
      <DashboardNav/>
    </div>
  );
};

export default Dashboard;
