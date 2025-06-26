import React from "react";
import "./Dashboard.css";
import CalendarComponent from "./CalendarComponent/CalendarComponent";
import DashboardAdd from "./DashboardAdds/DashboardAdd";
import DashBoardIconButton from "./DashBoardIconButton/DashBoardIconButton";
import DashBoardCards from "./DashBoardCards/DashBoardCards";
import DashboardChart from "./DashboardChart/DashboardChart";
import DashboardVehicles from "./DashboardVehicles/DashboardVehicles";



function Dashboard() {
  
  return (
    <div className="dashboard">
        <CalendarComponent />
        <DashboardAdd />
        <DashBoardIconButton />
        <DashBoardCards />
        <DashboardChart />
        <DashboardVehicles />
    </div>
  );
}

export default Dashboard;