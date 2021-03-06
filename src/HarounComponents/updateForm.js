import React, { Component } from "react";

import {Modal,Button,Form,Card} from 'react-bootstrap'

class updateForm extends Component {

 

  render() {
    return (
      <div>
         <Form
          style={{ marginBottom: "300px" }}
          style={{ marginLeft: "180px" }}
          onSubmit={this.props.updateComment}
          
          // onSubmit={this.props.updateMovie}

        >
        <Modal  show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Movie </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width: '25rem' }}>


         { [
  
  'Success',
 
].map((variant, idx) => (

          <Card style={{width: '18rem'  , marginLeft:'5rem'}} border="danger"
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem',hight:'10rem' }}
    className="mb-2"
  >
    <Card.Header>Movie Details</Card.Header>
    <Card.Img  variant="left" src={this.props.Poster}  />
    <Card.Body>
      <Card.Title> {this.props.Title} </Card.Title>
      <Card.Text>
      
        <br/>
        {this.props.type}
        <br/>
        {this.props.Year}

      </Card.Text>
    </Card.Body>
    </Card>))}
    


         
         
         





          </Modal.Body>
          <Modal.Footer>
      
          </Modal.Footer>
        </Modal>

        </Form> 

      </div>
    );
  }
}

export default updateForm;