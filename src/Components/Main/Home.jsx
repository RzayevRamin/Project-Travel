import React from "react";
import "./Home.css";
import ForeignTours from "./ForeignTours/ForeignTours";
import LocalTours from "./LocalTours/LocalTours";
import WorldTours from "./WorldTours/WorldTours";
import Dashboard from "./Dashboard/Dashboard";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContext">
        <ForeignTours source="home" />
        <LocalTours source="home" />
        <WorldTours source="home" />
      </div>
      <div className="dashboardContainer">
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
