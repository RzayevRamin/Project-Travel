import React from "react";
import "./Nav.css";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import Button from "@mui/joy/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../HeaderLogin/HeaderLogin";

function Nav({ menuOpen, setMenuOpen, showLoginInMenu = false }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    if (setMenuOpen) setMenuOpen(false); // menyunu bağla (mobil üçün)
  };

  return (
    <div className="nav">
      {/* Hamburger button yalnız mobil üçün göstərilir */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <ToggleButtonGroup
        id="nav-buttons"
        className={menuOpen ? "show" : ""}
        orientation="horizontal"
        sx={{ gap: "0.2rem", width: showLoginInMenu ? "100%" : "auto" }}
      >
        <Button onClick={() => handleNavigate("/home")}>Home</Button>
        <Button onClick={() => handleNavigate("/tours")}>Tours</Button>
        <Button onClick={() => handleNavigate("/hotels")}>Hotels</Button>
        <Button onClick={() => handleNavigate("/transport")}>Transport</Button>
        <Button onClick={() => handleNavigate("/media")}>Media</Button>
        <Button onClick={() => handleNavigate("/forum")}>Forum</Button>
        <Button onClick={() => handleNavigate("/contact")}>Contact</Button>

        {/* HeaderLogin burger menu daxilində */}
        {showLoginInMenu && menuOpen && <HeaderLogin />}
      </ToggleButtonGroup>
    </div>
  );
}

export default Nav;
