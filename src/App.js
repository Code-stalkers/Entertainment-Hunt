import React, { Component } from 'react';
import Movies from './HarounComponents/Movies';

import  {Card,Button,Col,Row,Container} from 'react-bootstrap'



import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';
=======
import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './YousefComponents/NavBar';
import Marwan from './marwans Component/commented'

class App extends Component {
  render() {
    return (

      <div>
        
        


        <Movies/>
     

        <h1>HEllO</h1>

        <Navbar/>
        <h1>HEllO</h1>


        <Movies/>
     



  
       

        
        
        <Suhaib/>
      </div>
      

      <div>
        <Navbar />
        <Movies />

        <h1>HEllO</h1>
      <div style={{ background:'#ffe9cf',borderRadius : '5px',displey :'flex' , justifyContent : 'center' ,alignItems:'center' }}> 
        <Marwan />
         </div>
        <Suhaib />
    </div>

    );
  }
}

export default App;