import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Main/MainLayout";
import Main from "./Components/Main/Main";
import Login from "./Components/Main/Login/Login";
import MainLoading from "./Components/Main/LoadingComponents/MainLoading";
import { AuthProvider } from "./Components/AuthContext/AuthContext";

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
    const timer = setTimeout(() => setLoading(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MainLoading />;

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login/*" element={<Login />} />

        <Route
          path="/*"
          element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
