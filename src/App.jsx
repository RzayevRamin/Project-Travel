import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/Main/Login/Login";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  if (location.pathname === "/login") {
    return <Login />;
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
      <Footer />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
