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
      comment: "",
      Poster: "",
      Type: "",
      filmId:'',

      // comment:'',
    };
  }
  

  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/static`)
      .then((result) => {
        this.setState({
          moviesBackEndArray: result.data,
          
        });
        
      })
      .catch((err) => {
        console.log("/error");
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
      // comment: item.comment,
      Poster: item.Poster,
      Type: item.Type,
      filmId:item._id,
      comment:'Hellooooooooooooooooooooooo',
    });
  };


  addWatch=async (item)=>{

    let objEst={
      Title : item.Title,
      Year : item.Year,
      Type : item.Type,
      Poster : item.Poster,
      comment : item.comment,

    }

    // console.log(obj.Title);
    
const save = await axios.get(`http://localhost:3001/addToWatchlist`,{params:objEst})
// console.log(save);



  }



  userAddWatch= (item)=>{

    let userObjEst={

      Title : item.Title,
      Year : item.Year,
      Type : item.Type,
      Poster : item.Poster,
      comment : item.comment,

    }

    console.log('rami',userObjEst);
    
 axios
.post(`http://localhost:3001/userAddingList`,{userObjEst})
.then((results) => {
  console.log('important',results.data);
})
.catch((error) => {
  console.log('error on adding ', error);
})
// console.log(userSave);



  }


  updateComment = (event) => {
    event.preventDefault();
    
    const obj = {

      Title: event.target.Title.value,
      Year: event.target.Year.value,
      Type: event.target.Type.value,
      Poster: event.target.Poster.value,

      comment:event.target.comment.value,

      filmId: this.state.filmId,
      
      
    };
    axios.put(`http://localhost:3001/updateComment/${this.state.filmId}`,obj)
    .then(result =>{
      this.setState({

        moviesBackEndArray:result.data,
        show : false
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
    })
  }


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
          userAddWatch={this.userAddWatch}
        />

        <StaticData
          moviesBackEndArray={this.state.moviesBackEndArray}
          showUpdateForm={this.showUpdateForm}
          addWatch={this.addWatch}
        />

        <UpdateForm
          show={this.state.show}
          Title={this.state.Title}
          Year={this.state.Year}
          Type={this.state.Type}
          Poster={this.state.Poster}
          comment={this.state.comment}
          handleClose={this.handleClose}
          updateComment={this.updateComment}
        />
      </div>
    );
  }
}

export default Movies;
