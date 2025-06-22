import React from "react";
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
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="headerContainer">
      <div className="carouselContainer">
        <CarouselBox />
        <div className="searchDestinationContainer">
          <SearchDestination />
        </div>
      </div>
      <div className="headerContent">
        <div className="header">
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
      </div>
    </div>
   
  );
}

export default Header;
