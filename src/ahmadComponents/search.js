import React from "react";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
class Search extends React.Component {
  render() {
    return (
      <div>
        <Form Id='search-Form'  onSubmit={this.props.search}>
          <Row >
            <Col xs={6}>
              <FloatingLabel
                controlId="symbol"
                label="Enter Coin:"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="BTC" />
              </FloatingLabel>
            </Col>
            <Col>
              <Button
                variant="success"
                type="submit"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Search;
