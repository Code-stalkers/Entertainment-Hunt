import React from "react";
import { Form, FloatingLabel, Row, Col, Button, Modal } from "react-bootstrap";
class GetRecommendation extends React.Component {
  
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
    return (
      <div>
        <Form onSubmit={this.props.getRecommendation}>
          <Row>
            <Col xs={2}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Coin:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="BTC" />
              </FloatingLabel>
            </Col>
            <Col>
              <Button variant="primary" type="submit" onClick={this.props.handleShow}>
                Get Recommendation
              </Button>
            </Col>
          </Row>
        </Form>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recommendation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.recommendation.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default GetRecommendation;
