import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile2 from "./profile2";
import { Drawer } from 'rsuite';
import Offcanvas from 'react-bootstrap/Offcanvas'
import renderUserList from '../HarounComponents/renderUserList'

class Update extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
            Type: '',
            filmId: '',
            comment: '',
            Array: [],
            show: false,
            Array2 : []
        };
       

  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
  this.fasopfdmjsdpo()
  this.movie ()
    this.setState({
      show: true,
    });
  };
// handelshow ناديتها لما بتعمل  fasopfdmjsdpo من فنكشن  
  movie = () => {
    let { user } = this.props.auth0;
    const email = user.email;
    console.log(email, 'hi')
    axios
        .get(`http://localhost:3001/userAddingList?email=${email}`)
        .then(result => {
          
            this.setState({
                Array2: result.data
            })
        })
        .catch(err => {
            console.log('error');
        })
   

}

    fasopfdmjsdpo = () => {
        let { user } = this.props.auth0;
        const email = user.email;
        console.log(email, 'hi')
        axios
            .get(`http://localhost:3001/addgame?email=${email}`)
            .then(result => {
              
                this.setState({
                    Array: result.data
                })
            })
            .catch(err => {
                console.log('error');
            })
       

    }





    showUpdateForm = (item) => {
        this.setState({
            show: true,
            Title: item.Title,
            Year: item.Year,
            imdbID: item.imdbID,
            Poster: item.Poster,
            Type: item.Type,
            filmId: item._id,
        });
    };

    // updateComment = (event) => {
    //     event.preventDefault();
    //     const obj = {
    //         comment: event.target.comment.value,
    //         filmId: this.state.filmId};
    //         console.log(obj.comment ,'comment')
    //     axios.put(`http://localhost:3001/updateComment/${this.state.filmId}`, obj)
    //         .then(result => {
    //             this.setState({

    //                 moviesBackEndArray: result.data,
    //                 show: false
    //             })
    //         })
    //         .catch(err => {
    //             console.log('error in updating the data');
    //         })
    // }

    render() {
        return (

            <>
            <center>
<Button onClick={ this.handleShow}>View favorites</Button></center>
              
             
<Offcanvas show={this.state.show} onHide={this.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
             <h1> Games You like</h1></Offcanvas.Title>
        </Offcanvas.Header>
                {this.state.Array.map(item => {
                    return (
                        <Offcanvas.Body>
                      {item.Title}
                      </Offcanvas.Body>
                       )
                })}
                {/* {this.state.Array.map(item => {
                    return (
                        <Profile2 showUpdateForm={this.updateComment} />)
                })} */}
                
                {this.state.Array2.map(item => {
                    return (
                        <Offcanvas.Body>
              {item.Title}
                      </Offcanvas.Body>
                     
                       )
                })}


</Offcanvas>





            </>
        )
    }


}

export default withAuth0(Update);