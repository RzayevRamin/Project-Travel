import React from "react";
import "./UserPanelHeader.css";
import Search from "../../../Header/Search/Search";
import ModeSwitch from "../../../Header/Switch/ModeSwitch";
import Nav from "../../../Header/Nav/Nav";
import Logo from "../../../Header/Logo/Logo";
import Language from "../../../Header/Language/Language";
import Valuta from "../../../Header/Valuta/Valuta";
import HeaderLogin from "../../../Header/HeaderLogin/HeaderLogin";

function UserPanelHeader({ darkMode, setDarkMode }) {

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="userHeaderContent">
      <div className="userHeader">
        <div className="userLogo">
          <Logo />
        </div>
        <div className="userNavContainer">
          <Nav />
        </div>
        <div className="userHeaderRightSection">
          <ModeSwitch
            onClick={toggleDarkMode}
            className="modeToggle"
            darkMode={darkMode}
          />
          <Search />
          <Language />
          <Valuta />
          <HeaderLogin />
        </div>
      </div>
    </div>
  );
}

export default UserPanelHeader;
