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
import renderUserList from "./renderUserList";


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
      .get(`https://funter.herokuapp.com/static`) 
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
        `https://funter.herokuapp.com/movie?title=${title}&year=${year}&type=${type}`
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
      comment:'',
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
    
const save = await axios.get(`https://funter.herokuapp.com/addToWatchlist`,{params:objEst})
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
.post(`https://funter.herokuapp.com/userAddingList`,{userObjEst})
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
    axios.put(`https://funter.herokuapp.com/updateComment/${this.state.filmId}`,obj)
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
            <Button variant="success" type="submit" style={{float:'left' ,position:'absolute' ,right:'190px'}}>
              Search
            </Button>
          </Form>
        </Container>

       
        <renderUserList />

        <br />
        <br />
        

       

        <StaticData
          moviesBackEndArray={this.state.moviesBackEndArray}
          showUpdateForm={this.showUpdateForm}
          addWatch={this.addWatch}
          fanFavorite={this.state.fanFavorite}
          
        />

 { <UserMovies
          variableMovies={this.state.variableMovies}
          showUpdateForm={this.showUpdateForm}
          userAddWatch={this.userAddWatch}
        />}



{/* <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/> */}

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
