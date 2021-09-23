import React from "react";
import { Card, Row, Container } from "react-bootstrap";
class UsersRecommendation extends React.Component {
  render() {
    return (
      <Container id='cards'>
        {this.props.usersRecommendation.map((item) => {
          return (
            // <Row  xs={4} md={3} className="g-4">
            <Card className='mt-4'style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{item.coin}</Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">
                  <h5>By {item.name}</h5>
                </Card.Subtitle>
                <hr/>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
            // </Row>
          );
        })}
      </Container>
    );
  }
}

export default UsersRecommendation;
