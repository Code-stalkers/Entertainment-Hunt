import React, { Component } from 'react';
// import Movies from './HarounComponents/Movies';
// import  {Card,Button,Col,Row,Container} from 'react-bootstrap'
import MarketCap from './ahmadComponents/marketCap';




import Suhaib from './suhaibComponents/suhaibMain'
import Navbar from './suhaibComponents/NavBar';
class App extends Component {




  render() {
    return (
      <div>
        




        {/* <Movies/> */}
     


        
        <Navbar/>
        <MarketCap/>
        <h1>HEllO</h1>
        {/* <Suhaib/> */}
      </div>
      
    );
  }
}

export default App;