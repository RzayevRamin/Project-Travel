import React from 'react'
import './Nav.css'
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom'; 

function Nav() {

  const navigate = useNavigate();

  return (
    <div className='nav'>
      <ToggleButtonGroup id="nav-buttons">
        <Button onClick={() => navigate("/home")}>Home</Button>
        <Button onClick={() => navigate("/tours")}>Tours</Button>
        <Button>Hotels</Button>
        <Button>Transport</Button>
        <Button>Media</Button>
        <Button>Forum</Button>
        <Button>Contact</Button>
      </ToggleButtonGroup>
    </div>
  )
}

export default Nav