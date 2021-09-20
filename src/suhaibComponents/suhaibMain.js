import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Game from './games';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import SuhaibModal from './suhaibModal';
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
      show: false
    }

  }

  getGameData = async (event) => {
    event.preventDefault()

    let Title = event.target.movieName.value;

    const url = `http://localhost:3001/game?title=${Title}`;

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

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  handleShow = () => {
    this.setState({
      show: true
    })
  }
  // addTofavs = (event) => {
  //   event.preventDefault() 
  //   let comment = event.target.comment.value;



  // }

  addGameHandler = () => {
      const { user } = this.props.auth0;
    let email = user.email;
    console.log(this.state.gameData,'hello');
    const obj = {
      Title:this.state.gameData[0].Title,
      Poster:this.state.gameData[0].Poster,
      Type:this.state.gameData[0].Type,
      Year:this.state.gameData[0].Year,
      email:email
    }
    axios.post(`http://localhost:3001/addGame`, obj)
      .then(result => {
        this.setState({
          gameData: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })



  }
  render() {
    return (
      <>

        <Form style={{ padding: 20, backgroundColor: '#dddd' }} onSubmit={this.getGameData}>
          <input type='text' name='movieName' placeholder='Enter movie name' />
          <br />
          <Button style={{ marginTop: 20 }} type='submit'>Explore!</Button>
        </Form>
        <Row className="justify-content-between" >

          <Game
            gameData={this.state.gameData}
            addGameHandler={this.addGameHandler}
            handleShow={this.handleShow}
          />
        </Row>
        <SuhaibModal show={this.state.show} handleClose={this.handleClose} gameData={this.state.gameData} addGameHandler={this.addGameHandler} addTofavs={this.addTofavs} />

      </>
    );
  }
}

export default withAuth0(Suhaib);