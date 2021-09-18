import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './suhaibComponents/NavBar';
import Marwan from './marwans Component/index'
class App extends Component {




  render() {
    return (
      <div>
    <Navbar />
        <Movies />
        <h1>HEllO</h1>
        <Marwan/>
        <Suhaib />
      </div>

    );
  }
}

export default App;