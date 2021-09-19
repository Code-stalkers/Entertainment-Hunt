import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';
import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';
import Marwan from './marwans Component/commented'
class App extends Component {
  render() {
    return (

      <div >
        {/* style={{backgroundColor: '#000000'}} */}
        


        <Navbar/>

        <Movies/>
     

      <div>
        <Navbar />
        <Movies />

        <h1>HEllO</h1>
      <div style={{ background:'#ffe9cf',borderRadius : '5px',displey :'flex' , justifyContent : 'center' ,alignItems:'center' }}> 
        <Marwan /> </div>

        <Suhaib />
        </div>
    );
  }
}

export default App;