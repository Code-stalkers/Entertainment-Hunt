import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';
import  {Card,Button,Col,Row,Container} from 'react-bootstrap'



import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';
class App extends Component {




  render() {
    return (
      <div>
        
        <Navbar/>




        <Movies/>
     


       
        <h1>HEllO</h1>
        <Suhaib/>
      </div>
      
    );
  }
}

export default App;