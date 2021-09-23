import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Game from './games';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
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
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {

    this.setState({
      show: true,
    });
  };
  componentDidMount = async () => {
    const url = `http://localhost:3001/game?title=call`;
    axios
      .get(url)
      .then(result => {

        this.setState({
          staticArr: result.data
        })

      })
      .catch(err => console.log(err))

  }




  getGameData = async (event) => {
    event.preventDefault()
    let title = event.target.movieTitle.value;
   
    const url = `http://localhost:3001/game?title=${title}`;
    axios
      .get(url)
      .then(result => {
        
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
    this.handleShow()
    const { user } = this.props.auth0;
    const email = user.email;
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
   
  }

  render() {
    return (
      <>
        <div style={{ displayFlex: 'inlineBlock' ,padding: 20, backgroundColor: '##212934', height: '100%', width: '100%' }} >
          <Container>
            <Form onSubmit={this.getGameData} style={{ display: 'InlineFlex' ,padding: 20, height: '100%', width: '100%' }}  >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ color: 'black', fontFamily: 'Cursive' }} >The Name of the game</Form.Label>
                  
                  <Form.Control
                    type="text"
                    name="movieTitle"
                    placeholder="Enter the Name of the game"
                  />
                </Form.Group>
                <Col>
                <Button variant="success" type="submit" style={{marginTop: '35px' }}  >
                Search
              </Button>
              </Col>
              </Row>
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
       






            <Carousel variant="dark" style={{ borderRadius: '20px', width: "80vw" }}>

              {this.state.staticArr.map(item => {
                return (
                  <Carousel.Item >

                          <h5 style={{ color: "#000" }, {fontFamily:'cursive'}}> 
                  
                  {item.Title}  </h5>
                  <img
                    src={item.Poster}
                    alt="First slide"
                    style={{
                      width: "80%",
                      height: "60rem",
                      borderRadius: "20px",
                      objectFit: "unset",
                    }}
/>
                  </Carousel.Item>
                  




)
              })}
            </Carousel> </center>
          <br />
          <br />
          <br />
          <Row className="justify-content-between">
            <Game favGamesArr={this.state.gameData} addGameHandler={this.addGameHandler}  handleClose={this.handleClose}  handleShow={this.handleShow} show={this.state.show}/>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />



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