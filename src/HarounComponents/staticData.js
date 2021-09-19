import React, { Component } from "react";

import  {Card,Button,Col,Row,Container, CardGroup} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"




class Movies extends Component {
  constructor(props) {
    super(props);
    this.state={
      // disabled :false,
      // active :false,
     
    
    } ;
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
        {/* <CardGroup> */}
        <Container >
       
          <Row  xs={1} md={3} className="g-4">



{ this.props.moviesBackEndArray.map((item,index)=>{

    return(
      
      <Col>

      {
      [
  
  'Danger      ',
  
  
 
].map((variant, idx) => (
      

   <Card  bg={variant.toLowerCase()}
   key={idx}
   text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
   style={{ width: '18rem' }}
   className="mb-2" variant="top" border="Warning" style={{ width: '18rem' ,height:'31rem' }}>
  

            
  <Card.Img  style={{ width: '17.9rem' ,height:'19rem' }} variant="top" src={item.Poster} onClick={() => this.props.showUpdateForm(item)} />
  <Card.Body>
    <Card.Title style={{ fontFamily: 'Cursive'}}>{item.Title}</Card.Title>
    <Card.Text style={{ fontFamily: 'Cursive'}}>
    <span > {item.Year}   </span>

    <span> {item.Type}   </span>
    </Card.Text>

    <Button  style={{position: 'absolute', left: '0px', bottom: '0px', marginLeft:'2rem',
  fontFamily: 'Impact, fantasy' } } onClick={()=> this.props.addWatch(item)}    size="lg" variant="warning"> <img height='30px' src='https://img.icons8.com/color/2x/plus.png'/> Add to Watchlist</Button>
  </Card.Body>
  
</Card> ))

}

</Col>






);

})}
 
 </Row>
 
 </Container>
 {/* </CardGroup> */}
      </div>
    );
  }
}

export default Movies;
