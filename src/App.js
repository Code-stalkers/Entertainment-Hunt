import React, { Component } from 'react';
import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './suhaibComponents/NavBar';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>HEllO</h1>
        <Suhaib/>
      </div>
      
    );
  }
}

export default App;