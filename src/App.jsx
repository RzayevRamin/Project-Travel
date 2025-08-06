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
import UserPanel from "./Components/Main/UserPanel/UserPanel";
import Profile from "./Components/Main/UserPanel/Profile/Profile";
import SecondLayout from "./Components/Main/SecondLayout";
import Favorites from "./Components/Main/UserPanel/Favorites/Favorites";
import Shopping from "./Components/Main/UserPanel/Shopping/Shopping";
import { CurrencyProvider } from "./CurrencyContext";
import ItemCard from "./Components/Main/ItemCards/ItemCard";

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
    <CurrencyProvider>
      <AuthProvider>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/userpanel/"
            element={
              <SecondLayout darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          >
            <Route index element={<UserPanel />} />
            <Route path="profile" element={<Profile />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="shopping" element={<Shopping />} />
          </Route>

          <Route
            path="/"
            element={
              <MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="transport" element={<Transports />} />
            <Route path="media" element={<Media />} />
            <Route path="forum" element={<Forum darkMode={darkMode} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/tours/:label" element={<ItemCard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </CurrencyProvider>
  );
}

export default App;
