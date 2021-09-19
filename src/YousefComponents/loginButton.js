// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import './Login.css';

// class loginButton extends React.Component {

//      LoginButton = () => {
//         const { loginWithRedirect } = useAuth0();
      
//         return <button onClick={() => loginWithRedirect()}>Log In</button>;
        
//       };
//   render() {
//     return(
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>Log In</Card.Title>
//           <Card.Text>
//             Click Below to Log In
//           </Card.Text>
//           {/* TODO: add a LoginButton component here that will log the user in with Auth0 */}
//           <this.state.LoginButton/>
          
//         </Card.Body>
//       </Card>
//     )
//   }
// }

// export default loginButton;


import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const  LoginButton = () => {
 
    const {isAuthenticated,loginWithRedirect} = useAuth0();
  return !isAuthenticated && (<button onClick={() => loginWithRedirect()}>Log In</button>);
};

export default LoginButton;