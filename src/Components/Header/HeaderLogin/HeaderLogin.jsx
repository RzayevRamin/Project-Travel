import React from 'react'
import './HeaderLogin.css'
import Button from '@mui/joy/Button'
import { useNavigate } from 'react-router-dom';




function HeaderLogin() {

const navigate = useNavigate();

  const LoginClicked = () => {
    navigate('/login');
  };

  return (
    
        <div className="headerLoginContainer">
        <Button onClick={LoginClicked} className='headerLoginButton'>Login</Button>
    </div>
    
  );
}

export default HeaderLogin