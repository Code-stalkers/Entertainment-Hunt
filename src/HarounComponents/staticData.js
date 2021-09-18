import React, { Component } from "react";

import  {Card,Button,Col,Row,Container} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";




class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }


  render() {
    return (
      <div>
        <Container >
          <Row xs={5} md={3} className="g-50">

{ this.props.moviesBackEndArray.map(item=>{

    return(
      <Col>

   <Card style={{ width: '18rem' }}>
  

            
  <Card.Img variant="top" src={item.Poster} />
  <Card.Body>
    <Card.Title>{item.Title}</Card.Title>
    <Card.Text>
    <span> {item.Year}   </span>

    <span> {item.Type}   </span>
    </Card.Text>

    <Button  variant="primary">Add to Watchlist</Button>
  </Card.Body>
  
</Card>


</Col>





);

})}
 
 </Row>
 </Container>
      </div>
    );
  }
}

export default Movies;
