import React from "react";
import { Form, Button } from "react-bootstrap";
class RecommendationForm extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.addRecommendation}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Ahmed" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="coin">
            <Form.Label>Coin</Form.Label>
            <Form.Control type="text" placeholder="BTC" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Recommendation</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button variant="success" type="submit" id='submitButton'>
            Submit
          </Button>
        </Form>


      </>
    );
  }
}

export default RecommendationForm;
