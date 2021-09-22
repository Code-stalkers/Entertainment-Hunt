import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Game from './games';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
// import SuhaibModal from './Gmaetoprofile';
import Carousel from 'react-bootstrap/Carousel'
import { Col, Container, } from "react-bootstrap";
class Suhaib extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favGamesArr: [],
      showFlag: false,
      gameData: [],
      Title: '',
      Poster: '',
      Type: '',
      Year: '',
      show: false,
      staticArr: []
    }

  }

  componentDidMount = async () => {
    const url = `http://localhost:3001/game?title=call`;
    axios
      .get(url)
      .then(result => {
        console.log(result);
        this.setState({
          staticArr: result.data
        })

      })
      .catch(err => console.log(err))

  }




  getGameData = async (event) => {
    event.preventDefault()
    let title = event.target.movieTitle.value;
    let year = parseInt(event.target.userYear.value);
    const url = `http://localhost:3001/game?title=${title}&year=${year}`;
    axios
      .get(url)
      .then(result => {
        console.log(result);
        this.setState({
          gameData: result.data
        })

      })
      .catch(err => console.log(err))

    if (this.gameData !== null) {
      console.log(this.gameData);
    } else {
      console.log('hi')
    }

  }
  showUpdateForm = (item) => {
    console.log(item)
    this.setState({
      show: true,
      Title: item.Title,
      Year: item.Year,
      Poster: item.Poster,
      Type: item.Type,
      filmId: item._id,
      comment: item.comment,
    });


  };



  addGameHandler = async (item) => {
    const { user } = this.props.auth0;
    const email = user.email;
    console.log(email)
    let objEst = {
      Title: item.Title,
      Year: item.Year,
      Type: item.Type,
      Poster: item.Poster,
      comment: item.comment,
      email: email
    }
    const save = await axios.post(`http://localhost:3001/addfavgame`, objEst)
    this.setState({

      favGamesArr: save.data

    })
    console.log(this.state.favGamesArr, 'hi');
  }

  render() {
    return (
      <>
        <div style={{ padding: 20, backgroundColor: '##212934', height: '100%', width: '100%' }} >
          <Container>
            <Form onSubmit={this.getGameData}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: 'black' }, { fontFamily: 'Cursive' }} >The Name of the game</Form.Label>
                  <Form.Control
                    type="text"
                    name="movieTitle"
                    placeholder="Enter the Name of the game"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label style={{ color: 'black' }, { fontFamily: 'Cursive' }}>Year</Form.Label>
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
              </Row>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Container>

          <br />
          <br />
         

          <center>

            <div style={{
              width: '70%', height: '100px', marginleft: '25%', paddingTop: '25px'
              , borderRadius: '25px', fontFamily: 'sans-serif'
            }}>
              <h1>Our favorite game series</h1>
            </div>
          </center>
          <br />
          <center>
            <Carousel variant="dark" style={{ borderRadius: '20px', width: "60vw" }}>

              {this.state.staticArr.map(item => {
                return (
                  <Carousel.Item >
                          <h5 style={{ color: "#000" }, {fontFamily:'cursive'}}> 
                  
                  {item.Title}  </h5>
                  <img
                    src={item.Poster}
                    alt="First slide"
                    style={{
                      width: "28rem",
                      height: "28rem",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                  </Carousel.Item>

                )
              })}
            </Carousel> </center>
             <br/>
            

             <br/>
            

             <br/>
            


          <Row className="justify-content-between">
            <Game favGamesArr={this.state.gameData} addGameHandler={this.addGameHandler} />
          </Row>
           <br/>
            

             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
            


        </div>
      </>
    );
  }
}

export default withAuth0(Suhaib);

  // addTofavs = (event) => {
  //   event.preventDefault() 
  //   let comment = event.target.comment.value;



  // }

  // addGameHandler = () => {
  //     const { user } = this.props.auth0;
  //   let email = user.email;
  //   console.log(this.state.gameData,'hello');
  //   const obj = {
  //     Title:this.state.gameData[0].Title,
  //     Poster:this.state.gameData[0].Poster,
  //     Type:this.state.gameData[0].Type,
  //     Year:this.state.gameData[0].Year,
  //     email:email
  //   }
  //   axios.post(`http://localhost:3001/addGame`, obj)
  //     .then(result => {
  //       this.setState({
  //         gameData: result.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log('error');
  //     })



  // }