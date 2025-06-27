import React from "react";
import "./Tours.css"
import ForeignTours from "../ForeignTours/ForeignTours";
import LocalTours from "../LocalTours/LocalTours";
import WorldTours from "../WorldTours/WorldTours";

function Tours() {
  return (
    <div className="toursContainer">
      <ForeignTours source="tours" />
      <LocalTours source="tours" />
      <WorldTours source="tours" />
    </div>
  );
}

export default Tours;
