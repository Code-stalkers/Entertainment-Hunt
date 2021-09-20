import React from "react";
import { Card } from "react-bootstrap";
class UsersRecommendation extends React.Component {
  render() {
    return (
      <div>
        {this.props.usersRecommendation.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{item.coin}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h5>By {item.name}</h5>
                </Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default UsersRecommendation;
