import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Game from './games';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import SuhaibModal from './Gmaetoprofile';
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
  showUpdateForm = (item) => {
    console.log(item)
    this.setState({
      show: true,
      Title: item.Title,
      Year: item.Year,
      Poster: item.Poster,
      Type: item.Type,
      filmId:item._id,
      comment:item.comment,
    });

    
  };



  addGameHandler=async (item)=>{
    const { user } = this.props.auth0;
      const email = user.email;
      console.log(email)
    let objEst={
      Title : item.Title,
      Year : item.Year,
      Type : item.Type,
      Poster : item.Poster,
      comment : item.comment,
  email: email
    }
const save = await axios.post(`http://localhost:3001/addfavgame`,objEst)
this.setState({
  
  favGamesArr :save.data
  
})
console.log(this.state.favGamesArr,'hi');
  }

  render() {
    return (
      <>

        <Form style={{ padding: 20, backgroundColor: '#dddd' }} onSubmit={this.getGameData}>
          <input type='text' name='movieName' placeholder='Enter movie name' />
          <br />
          <Button style={{ marginTop: 20 }} type='submit'>Explore!</Button>
        </Form>
        <Row className="justify-content-between">
          <Game favGamesArr={this.state.gameData} addGameHandler={this.addGameHandler}/>
        </Row>

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