import React from "react";
import "./Main.css";
import ForeignTours from "./ForeignTours/ForeignTours";
import LocalTours from "./LocalTours/LocalTours";
import WorldTours from "./WorldTours/WorldTours";
import Dashboard from "./Dashboard/Dashboard";

function Main() {
  return (
    <div className="homeContainer">
      <div className="homeContext">
        <ForeignTours />
        <LocalTours />
        <WorldTours />
      </div>
      <div className="dashboardContainer">
        <Dashboard />
      </div>
    </div>
  );
}

export default Main;
