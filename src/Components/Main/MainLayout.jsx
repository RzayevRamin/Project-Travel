import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MainLayout({ darkMode, setDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;