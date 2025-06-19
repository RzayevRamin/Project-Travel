import React from 'react'
import './Login.css'
import LoginCarousel from './LoginCarousel/LoginCarousel'
import Button from '@mui/joy/Button'
import Sheet from '@mui/joy/Sheet'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Checkbox from '@mui/joy/Checkbox';



function Login() {
  return (
    <div className='LoginPageContainer'>
      <LoginCarousel />
      <div className="LogFormContainer">
      <Sheet
          sx={{
    width: 320,
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'md',
    boxShadow: 'md',
    p: 2,
    overflow: 'auto',
    zIndex: 10,
    position: 'relative'
  }} >
          <div className='loginContainer'>
            <div className="signupLoginButtonsContainer">
              <Button size="sm" variant="solid" color="primary">Log in</Button>
              <Button size="sm" variant="outlined">Sign up</Button>
            </div>
            <div className="inputsContainer"><FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="youremail@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Link href="#" underline="hover" sx={{ alignSelf: 'flex-end', mb: 1 }}>
            Forgot password?</Link>
            <Checkbox label="Remember me" variant="solid" defaultChecked />
            
           <Button size="lg" variant="solid" color="primary">Log in</Button>
          </div>
            <div className="otherRegistrationMethodsContainer"></div>
          </div>
        </Sheet>
        </div>
    </div>
  )
}

export default Login