import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';
// import  {Card,Button,Col,Row,Container} from 'react-bootstrap'
import Footer from './YousefComponents/Footer'
// import LoginButton from './YousefComponents/loginButton'
import Suhaib from './suhaibComponents/suhaibMain'
// import Navbar from './YousefComponents/NavBar';
import Home from './YousefComponents/HomePage';
import { withAuth0 } from '@auth0/auth0-react';
import MarketCap from './ahmadComponents/marketCap';
import Profile from './YousefComponents/profile';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './YousefComponents/Header';


class App extends Component {
  render() {
    return (

      <div>

      

        {/* <Navbar/> */}
        <Router>
        <Header />
          <Switch>


            <Route exact path="/game">   <Suhaib />  </Route>
            <Route exact path="/movie">  <Movies />  </Route>
            <Route exact path="/">         <Home />  </Route>
            <Route path="/crypto">   <MarketCap />  </Route>
            <Route path="/Profile">   <Profile />   </Route>


          </Switch>

        </Router>
        <Footer />

      </div>
    );
  }
}

export default withAuth0(App);