import React, { Component } from "react";

import StaticData from "./staticData";
import axios from "axios";
import {
  Card,
  Button,
  Col,
  Row,
  Container,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import UserMovies from "./userMovies";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesBackEndArray: [],
      variableMovies: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/static`)
      .then((result) => {
        this.setState({
          moviesBackEndArray: result.data,
        });
        // console.log(this.state.moviesBackEndArray);
      })
      .catch((err) => {
        // console.log("/error");
      });
  };

  findMovies = async (event) => {
    event.preventDefault();

    let title = event.target.movieTitle.value;
    let year = parseInt(event.target.userYear.value);
    let type = event.target.userType.value;

    await axios
      .get(
        `http://localhost:3001/movie?title=${title}&year=${year}&type=${type}`
      )
      .then((result) => {
        this.setState({
          variableMovies: result.data,
        });
        console.log(this.state.variableMovies.data);
      })
      .catch((err) => {
        console.log("errodffffffffr");
        console.log(this.state.variableMovies);
      });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <Container>
          <Form onSubmit={this.findMovies}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                name="movieTitle"
                placeholder="Enter Movie Name"
              />
            </Form.Group>
            <br />
            <br />
            <FloatingLabel controlId="floatingSelect" label="Release Date">
              <Form.Select
                name="userYear"
                aria-label="Floating label select example"
              >
                <option>Year</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </Form.Select>
            </FloatingLabel>
            <br />
            <br />

            <FloatingLabel controlId="floatingSelect" label="Type">
              <Form.Select
                name="userType"
                aria-label="Floating label select example"
              >
                <option>Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </Form.Select>
            </FloatingLabel>
            <br />
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <br />
        <br />

        <UserMovies variableMovies={this.state.variableMovies} />

        <StaticData moviesBackEndArray={this.state.moviesBackEndArray} />
      </div>
    );
  }
}

export default Movies;
