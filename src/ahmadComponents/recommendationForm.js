import React from "react";
import { Form, Button } from "react-bootstrap";
class RecommendationForm extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Ahmed" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="recommended_coin">
            <Form.Label>Coin</Form.Label>
            <Form.Control type="text" placeholder="BTC" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="textArea">
            <Form.Label>Recommendation</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default RecommendationForm;
