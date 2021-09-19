  
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Game from './games';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import GameItem from './gameItem'
// import Update from 'suhaibModal';
import { withAuth0 } from "@auth0/auth0-react";


class Suhaib extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favGamesArr: [],
      showFlag: false,
      gameData:[],
      Title:'',
      Poster:'',
      Type:'',
      Year:''


      gameData: []


    }
    
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     favBooksArr: [],
  //     showFlag: false,
  //     title: '',
  //     description: '',
  //     status: '',
  //     email: '',
  //     id: ''
  //   }
  // }

  // componentDidMount = () => {
  //   const { user } = this.props.auth0;
  //   let email = user.email;
  //   axios.get(`http://localhost:3001/game?title=${Title}&email=${email}`)
  //     .then(result => {
  //       this.setState({
  //         favGamesArr: result.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log('error');
  //     })
  // }



  // deleteGame = (id) => {
  //   const { user } = this.props.auth0;
  //   let email = user.email;
  //   axios.delete(`https://books-suhaib-backend.herokuapp.com/deleteBooks/${id}?email=${email}`)
  //     .then(result => {
  //       this.setState({
  //         favBooksArr: result.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log('erorr')
  //     })
  // }


  getGameData = async (event) => {
    event.preventDefault()
    
    let Title = event.target.movieName.value;

    const url = `http://localhost:3001/game?title=${Title}`;

    let collectedData = axios
      .get(url)
      .then(result => {
        console.log(result);
        this.setState({
          gameData: result.data
        })
        
      })
      .catch(err => console.log(err))
      
      if(this.gameData!==null){
        console.log(this.gameData);
      }else{
        console.log('hi')
      }



  }


  handleClose = () => {
    this.setState({
      showFlag: false
    })
  }


  handleClose = () => {
    this.setState({
      showFlag: false
    })
  }

  // showModalUpdate = (item) => {
  //   this.setState({
      
  //     showFlag: true,
  //     Title: item.Title,
  //     Poster: item.Poster,
  //     Type: item.Type,
  //     Year: item.Year,
  //     id: item._id
  //   })
  // }

  // updateBook=(event)=>{
  //   event.preventDefault();
  //   const { user } = this.props.auth0;
  //   let email = user.email;
  //   const obj={
  //     Title: event.target.movieName.value,
  //     id:this.state.id
  //   }
  //   axios
  //   .put(`http://localhost:3001/updateGame/${this.state.id}`,obj)
  //   .then(result=>{
  //     this.setState({
  //       favGamesArr: result.data,
  //       showFlag: false
  //     })
  //   })
  //   .catch(err=>{
  //     console.log('erorr')
  //   })
  // }
  

  addGameHandler = (Title,Poster,Type,Year,email) => {
    
    if(this.gameData !== null || this.gameData !== undefined) {
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


    }else{
      console.log('hi')
    }
    


  // showModalUpdate = (item) => {
  //   this.setState({
      
  //     showFlag: true,
  //     Title: item.Title,
  //     Poster: item.Poster,
  //     Type: item.Type,
  //     Year: item.Year,
  //     id: item._id
  //   })
  // }

  // updateBook=(event)=>{
  //   event.preventDefault();
  //   const { user } = this.props.auth0;
  //   let email = user.email;
  //   const obj={
  //     Title: event.target.movieName.value,
  //     id:this.state.id
  //   }
  //   axios
  //   .put(`http://localhost:3001/updateGame/${this.state.id}`,obj)
  //   .then(result=>{
  //     this.setState({
  //       favGamesArr: result.data,
  //       showFlag: false
  //     })
  //   })
  //   .catch(err=>{
  //     console.log('erorr')
  //   })
  // }
  

  addGameHandler = (Title,Poster,Type,Year,email) => {
    
    if(this.gameData !== null || this.gameData !== undefined) {
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


    }else{
      console.log('hi')
    }
    


  }
  render() {
    return (
      <>


        <Form style={{ padding: 20 }} style={{ backgroundColor: '#dddd' }} onSubmit={this.getGameData}>

      
      <Form style={{ padding: 20 }} style={{ backgroundColor: '#dddd' }} onSubmit={this.getGameData}

          <fieldset>


            <input type='text' name='movieName' placeholder='Enter movie name' />
            <br />
            <Button style={{ marginTop: 20 }} type='submit'>Explore!</Button>
            

          </fieldset>
        </Form>
{/* <Update/> */}
        {/* {this.state.favGamesArr.map(item => {
          return (


            <div >
              <Gameitem class="results"


            <div >
              <Gameitem class="results"

                item={item}
                deleteBook={this.deleteBook}
                showModalUpdate={this.showModalUpdate}
              />


            </div> */}


        <Row className="justify-content-between" >

          <Game
            gameData={this.state.gameData}
          />

      <Row className="justify-content-between" >
            
            <Game
             gameData={this.state.gameData}
             addGameHandler={this.addGameHandler}
             
            />


        </Row>



      </>
    );
  }
}

export default withAuth0(Suhaib);