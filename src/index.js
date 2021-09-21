import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(

  <Router>
  <Auth0ProviderWithHistory
   
  
    domain="dev-r5h2fhpc.us.auth0.com"
    clientId="x0E99FTin7ilYL7owkfZ25QMJap1UnHJ"
    redirectUri={window.location.origin}
  >
    <App />
 
  </Auth0ProviderWithHistory>
</Router>,
  document.getElementById("root")
);

