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
    
    };
  }

 

  render() {
    return (
      <div>
        

        <center>

        <div  style={{backgroundColor:'#CDF3A2' , width:'70%', height:'100px' ,marginleft:'25%',paddingTop:'25px',borderRadius:'25px' ,fontFamily:'sans-serif'}}> <h1>Most Popular Movies</h1>
        </div>
        </center>
        
        <center>
          {" "}
          <br />
        <br />
        <br />
      
       
          <Carousel
            variant="dark"
            style={{ borderRadius: "20px", width: "60vw" }}
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
                      width: "48rem",
                      height: "28rem",
                      borderRadius: "20px",
                      objectFit: "fill",
                    }}
                  />
                 
                  {/* <Carousel.Caption> */}
                    <br/>
                    <br/>
                    <br/>
                 
                  {/* </Carousel.Caption> */}
                </Carousel.Item>
              );
            })}
          </Carousel>{" "}
          <br/>
        <br/>
        </center>
        <br/>
        <br/>
        <br/> 
        <br/>
        <br/>

        
      </div>
    );
  }
}

export default Movies;
