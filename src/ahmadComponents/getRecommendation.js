import React from "react";
import { Form, FloatingLabel, Row, Col, Button, Modal } from "react-bootstrap";
class GetRecommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <Button
                variant="primary"
                type="submit"
                onClick={this.props.handleShow}
              >
                Get Recommendation
              </Button>
            </Col>
          </Row>
        </Form>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Recommendation :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.recommendation.recommendation}</h4>
            <hr/>
            <h5>Sentiment : {this.props.recommendation.sentiment}</h5>
            <hr/>
            <h5>Cause {this.props.recommendation.description}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default GetRecommendation;
