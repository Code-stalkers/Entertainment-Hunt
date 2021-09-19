import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';
import  {Card,Button,Col,Row,Container} from 'react-bootstrap'


import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';


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
            <Route exact path="/game">  <Suhaib/>
            </Route>
            <Route exact path="/movie">  <Movies/>
            </Route>
          </Switch>
        </Router>

      </div>
      



    );
  }
}

export default App;