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
import UpdateForm from "./updateForm";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesBackEndArray: [],
      variableMovies: [],
      show: false,
      Title: "",
      Year: "",
      imdbID: "",
      Poster: "",
      Type: "",
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

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  showUpdateForm = (item) => {
    this.setState({
      show: true,
      Title: item.Title,
      Year: item.Year,
      imdbID: item.imdbID,
      Poster: item.Poster,
      Type: item.Type,
    });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <Container>
          <Form onSubmit={this.findMovies}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label style={{color: 'black'} , {fontFamily: 'Cursive'}} >Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  name="movieTitle"
                  placeholder="Enter Movie Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{color: 'black'} , {fontFamily: 'Cursive'}}>Year</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="userYear"
                  aria-label="Floating label select example"
                >
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{color: 'black'} , {fontFamily: 'Cursive'}}>Type</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="userType"
                  aria-label="Floating label select example"
                >
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Container>

        <br />
        <br />

        <br />
        <br />

        <UserMovies
          variableMovies={this.state.variableMovies}
          showUpdateForm={this.showUpdateForm}
        />

        <StaticData
          moviesBackEndArray={this.state.moviesBackEndArray}
          showUpdateForm={this.showUpdateForm}
        />

        <UpdateForm
          show={this.state.show}
          Title={this.state.Title}
          Year={this.state.Year}
          Type={this.state.Type}
          Poster={this.state.Poster}
          imdbID={this.state.imdbID}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Movies;
