import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Game from './games';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Suhaib extends Component {

  constructor(props) {
    super(props)
    this.state = {

      
      gameData:[]

    }
  }


  getGameData = async (event) => {
    event.preventDefault()
    let Title = event.target.movieName.value;

    const url = `http://localhost:3001/game?title=${Title}`;
    
    let collectedData=axios
      .get(url)
      .then(result => {
        console.log(result);
        this.setState({
          gameData: result.data
        })
        console.log(this.state.gameData);
      })
      .catch(err => console.log(err))

  }



  render() {
    return (
      <>
      
      <Form style={{ padding: 20 }} style={{ backgroundColor: '#dddd' }} onSubmit={this.getGameData}>
          <fieldset>


            <input type='text' name='movieName' placeholder='Enter movie name' />
            <br />
            <Button style={{ marginTop: 20 }} type='submit'>Explore!</Button>

          </fieldset>
        </Form>

      <Row className="justify-content-between" >
            
            <Game
             gameData={this.state.gameData}
            />

        </Row>



      </>
    );
  }
}

export default Suhaib;