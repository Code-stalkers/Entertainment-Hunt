import React, { Component } from "react";

import  {Card,Button,Col,Row,Container} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"




class UserMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // disabled :false,
      // active :false,
    
    };
  }


  // disabledButton= () => {
  //   this.setState({
  //     disabled :true,
  //     active :false,
  //   })
  // }


  render() {
    return (

      


      <div>
         <br/>
                   


        
        <Container style={{marginTop:'550px'}} >
   
          
          <Row xs={1} md={3} className="g-4">

{this.props.variableMovies.map(item=>{

    return(
      <Col>

{
      [
  
  'Dark ',
  
  
].map((variant, idx) => (
      

   <Card  bg={variant.toLowerCase()}
   key={idx}
   text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
   style={{ width: '18rem' }}
   className="mb-2" variant="top" border="danger" style={{ width: '18rem' ,height:'31rem',textAlign: 'center' }}>
  

            
  <Card.Img  style={{ width: '17.9rem' ,height:'19rem' }} variant="top" src={item.Poster} onClick={() => this.props.showUpdateForm(item)} />
  <Card.Body>
    <Card.Title style={{ fontFamily: 'Cursive'}}>{item.Title}</Card.Title>
    <Card.Text style={{ fontFamily: 'Cursive'}}>
    <span> {item.Year}   </span>

    <span> {item.Type}   </span>
    </Card.Text>

    <Button  style={{ 
  fontFamily: 'Roboto', fontSize: '18px'
  }} onClick={()=> this.props.userAddWatch(item)}     variant="success"> <img height='30px' src='https://img.icons8.com/color/2x/plus.png'/>  Add to Watchlist</Button>
  </Card.Body>
  
  </Card> ))

}

</Col>


);

})}
 
 </Row>

 </Container>

 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
                    <br/>
                    <br/>

      </div>



    );
  }
}

export default UserMovies;
