import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchDestination from "./SearchDestination/SearchDestination";
import ModeSwitch from "./Switch/ModeSwitch";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Language from "./Language/Language";
import Valuta from "./Valuta/Valuta";
import CarouselBox from "./Carousel/CarouselBox";
import Search from "./Search/Search";
import HeaderLogin from "./HeaderLogin/HeaderLogin";

function Header({ darkMode, setDarkMode }) {
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
    <div className="headerContainer">
      {(isDesktop || isTablet) && (
        <>
          <div className="carouselContainer">
            <CarouselBox />
          </div>
        </>
      )}

      <div className="headerContent">
        {/* Mobil top row */}
        {isMobile && (
          <div className="headerTopMobile">
            <div className="headerTopLeft">
              <Logo />
            </div>
            <div className="headerTopRight">
              <HeaderLogin />
            </div>
          </div>
        )}

        {/* Desktop üçün adi header */}
        {isDesktop && (
          <div className="header desktopHeader">
            <div className="logo">
              <Logo />
            </div>
            <div className="navContainer">
              <Nav />
            </div>
            <div className="headerRightSection">
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
          <div className="headerMobile">
            <div className="mobileMenuRow">
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
          <div className="headerTablet">
            <div className="headerTabletTop">
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
            <div className="headerTabletBottom">
              <Nav />
            </div>
          </div>
        )}
      </div>

      {/* Mobil olduqda carousel burda göstər */}
      {isMobile && (
        <div className="carouselContainer mobileCarousel">
          <CarouselBox />
        </div>
      )}
    </div>
  );
}

export default Header;
