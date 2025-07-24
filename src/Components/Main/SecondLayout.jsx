import React from 'react'
import { Outlet } from "react-router-dom";
import UserPanelHeader from './UserPanel/UserPanelHeader/UserPanelHeader';
import Footer from '../Footer/Footer';

function SecondLayout({ darkMode, setDarkMode }) {
  return (
    <>
        <UserPanelHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default SecondLayout