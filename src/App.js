import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';

import  {Card,Button,Col,Row,Container} from 'react-bootstrap'

import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';
import Marwan from './marwans Component/commented'
import Favlist from './HarounComponents/Favlist';

class App extends Component {
  render() {
    return (
<div>
        <Navbar />
        <h1>HEllO</h1>
        <Movies />
      <div style={{ background:'#ffe9cf',borderRadius : '5px',displey :'flex' , justifyContent : 'center' ,alignItems:'center' }}> 
         </div>
<Favlist/>
        <Suhaib />
    </div>

    );
  }
}

export default App;