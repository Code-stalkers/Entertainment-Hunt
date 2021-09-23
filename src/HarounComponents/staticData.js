import React, { Component } from "react";

import { Card, Button, Col, Row, Container, CardGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fanFavorite :[],
    
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://funter.herokuapp.com/static`) 
      .then((result) => {
        this.setState({
          fanFavorite: result.data,
          
        });
        
      })
      .catch((err) => {
        console.log("/error");
      });
     
  };

 

  render() {
    return (
      <div>
        <br />
        <br />
        
        

        <center>

        <div  style={{  width:'70%', height:'100px' ,marginleft:'25%',paddingTop:'25px',borderRadius:'25px' ,fontFamily:'sans-serif'}}> <h1>Most Popular Movies</h1>
        </div>
        </center>
        
        <center>
          {" "}
          <br />
        <br />
        <br />
      
       
          <Carousel
            variant="dark"
            style={{ borderRadius: "20px", width: "29vw" ,float:'left',position:'absolute', left:'150px'}}
          >
            {this.props.moviesBackEndArray.map((item) => {
              return (
                <Carousel.Item>
                     <h5 style={{ color: "#000" }, {fontFamily:'cursive'}}> 
                  
                  {item.Title}  </h5>
                  <img
                    src={item.Poster}
                    alt="First slide"
                    style={{
                      width: "100%",
                      height: "28rem",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                 
                  {/* <Carousel.Caption> */}
                   
                   
                 
                  {/* </Carousel.Caption> */}
                </Carousel.Item>
                
              );
            })}
          </Carousel>{" "}
          
        </center>

        <center>
          {" "}
         
      
       
          <Carousel

            variant="dark"
            style={{ borderRadius: "20px", width: "29vw" ,float:'right',position:'absolute', right:'220px',top:'490px'}}
          >
            {this.state.fanFavorite.map((item) => {
              return (
                <Carousel.Item interval={1000} >
                     <h5 style={{ color: "#000" }, {fontFamily:'cursive'}}> 
                  
                  {item.Title}  </h5>
                  <img
                    src={item.Poster}
                    alt="First slide"
                    style={{
                      width: "100%",
                      height: "28rem",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                 
                  {/* <Carousel.Caption> */}
                  <br/>
                   
                  {/* </Carousel.Caption> */}
                </Carousel.Item>
              );
            })}
          </Carousel>{" "}
         
        </center>
      

        
      </div>
    );
  }
}

export default Movies;
