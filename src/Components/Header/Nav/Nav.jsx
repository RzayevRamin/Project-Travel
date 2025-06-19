import React from 'react'
import './Nav.css'
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';

function Nav() {
  return (
    <div className='nav'>
      <ToggleButtonGroup id="nav-buttons">
        <Button>Home</Button>
        <Button>Tours</Button>
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