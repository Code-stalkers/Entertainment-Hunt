import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';
import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';
import Favlist from './HarounComponents/Favlist';
import Gmaetoprofile from './suhaibComponents/Gmaetoprofile';
class App extends Component {
  render() {
    return (
<div>
        <Navbar />
        <h1>HEllO</h1>
        <Gmaetoprofile/>
        <Movies />
      <div style={{ background:'#ffe9cf',borderRadius : '5px',displey :'flex' , justifyContent : 'center' ,alignItems:'center' }}> 
         </div>
        
        <Suhaib />
    </div>

    );
  }
}

export default App;