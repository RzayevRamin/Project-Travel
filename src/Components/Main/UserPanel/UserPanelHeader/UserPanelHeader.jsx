import React, { useState, useEffect } from "react";
import "./UserPanelHeader.css";
import Search from "../../../Header/Search/Search";
import ModeSwitch from "../../../Header/Switch/ModeSwitch";
import Nav from "../../../Header/Nav/Nav";
import Logo from "../../../Header/Logo/Logo";
import Language from "../../../Header/Language/Language";
import Valuta from "../../../Header/Valuta/Valuta";
import HeaderLogin from "../../../Header/HeaderLogin/HeaderLogin";

function UserPanelHeader({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowWidth <= 767;
    const isTablet = windowWidth >= 768 && windowWidth <= 1023;
    const isDesktop = windowWidth >= 1024;

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="userPanelHeaderContainer">
      <div className="userPanelHeaderContent">
        {isMobile && (
          <div className="userPanelHeaderTopMobile">
            <div className="userPanelHeaderTopLeft">
              <Logo />
            </div>
            <div className="userPanelHeaderTopRight">
              <HeaderLogin />
            </div>
          </div>
        )}


        {isDesktop && (
          <div className="userPanelHeader userPanelDesktopHeader">
            <div className="userPanelLogo">
              <Logo />
            </div>
            <div className="userPanelNavContainer">
              <Nav />
            </div>
            <div className="userPanelHeaderRightSection">
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
        )}

        {isMobile && (
          <div className="userPanelHeaderMobile">
            <div className="userPanelMobileMenuRow">
              <Nav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                showLoginInMenu={false}
              />
              <Search />
              <ModeSwitch
                onClick={toggleDarkMode}
                className="modeToggle"
                darkMode={darkMode}
              />
              <Language />
              <Valuta />
            </div>
          </div>
        )}

        {isTablet && (
          <div className="userPanelHeaderTablet">
            <div className="userPanelHeaderTabletTop">
              <Logo />
              <Search />
              <ModeSwitch
                onClick={toggleDarkMode}
                className="modeToggle"
                darkMode={darkMode}
              />
              <Language />
              <Valuta />
              <HeaderLogin />
            </div>
            <div className="userPanelHeaderTabletBottom">
              <Nav />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPanelHeader;
