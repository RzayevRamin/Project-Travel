import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Main/MainLayout";
import Home from "./Components/Main/Home";
import Login from "./Components/Main/Login/Login";
import MainLoading from "./Components/Main/LoadingComponents/MainLoading";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import Tours from "./Components/Main/Tours/Tours";
import Hotels from "./Components/Main/Hotels/Hotels";
import Transports from "./Components/Main/Transports/Transports";
import Media from "./Components/Main/Media/Media";
import Forum from "./Components/Main/Forum/Forum";
import Contact from "./Components/Main/Contact/Contact";

function App() {  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MainLoading />;

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login/*" element={<Login />} />

        <Route
          path="/"
          element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="tours" element={<Tours />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="transport" element={<Transports />} />
          <Route path="media" element={<Media />} />
          <Route path="forum" element={<Forum darkMode={darkMode} />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
