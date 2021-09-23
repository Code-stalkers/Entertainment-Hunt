
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import './Home.css';
const  LoginButton = () => {
 
    const {isAuthenticated,loginWithRedirect} = useAuth0();
  return !isAuthenticated && (<Button id="b1" style={{marginLeft:'80px'}} variant="success"  onClick={() => loginWithRedirect()}>Log In</Button>);
};

export default LoginButton;