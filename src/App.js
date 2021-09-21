import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';

// import  {Card,Button,Col,Row,Container} from 'react-bootstrap'
// import Footer from './YousefComponents/footer'
//  import LoginButton from './YousefComponents/loginButton'
 import Suhaib from './suhaibComponents/suhaibMain'
  import Navbar from './YousefComponents/NavBar';
import Home from './YousefComponents/HomePage';
import { withAuth0 } from '@auth0/auth0-react';
import MarketCap from './ahmadComponents/marketCap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (

      <div>

      <Navbar/>  

      

          <Router>
          <Switch>
            <Route exact path="/game">   <Suhaib/>  </Route> 
            <Route exact path="/movie">  <Movies/> </Route> 
            <Route exact path="/"> <Home/> </Route>
            <Route  path="/crypto">   <MarketCap/>  </Route>


          </Switch>

        </Router>
        {/* <Footer/> */}

        </div>
    );
  }
}

export default withAuth0(App);