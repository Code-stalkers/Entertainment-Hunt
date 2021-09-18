import React, { Component } from "react";

import {Modal,Button,Form} from 'react-bootstrap'

class updateForm extends Component {

 

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form
          style={{ marginBottom: "300px" }}
          style={{ marginLeft: "180px" }}
          
          onSubmit={this.props.updateBook}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" name="title" defaultValue={this.props.title}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Book Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              defaultValue={this.props.description}/>
            
          </Form.Group>
        
          <Form.Label> </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="text" name="" defaultValue={this.props.status} />
          </Form.Group>
          <Form.Label>   </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="text" name="" defaultValue={this.props.email} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>  





          </Modal.Body>
          <Modal.Footer>
      
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default updateForm;