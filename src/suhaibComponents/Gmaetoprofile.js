import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile2 from "./profile2";
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
            Array: []
        }
    }

    fasopfdmjsdpo = () => {
        let { user } = this.props.auth0;
        const email = user.email;
        console.log(email, 'hi')
        axios
            .get(`http://localhost:3001/addgame?email=${email}`)
            .then(result => {
                console.log(result.data)
                this.setState({
                    Array: result.data
                })
            })
            .catch(err => {
                console.log('error');
            })
        console.log(this.state.Array)

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
                <button onClick={this.fasopfdmjsdpo}>fsddfasdf</button>
             
                {this.state.Array.map(item => {
                    return (

                        <p>{item.Title}</p>)
                })}
                {/* {this.state.Array.map(item => {
                    return (
                        <Profile2 showUpdateForm={this.updateComment} />)
                })} */}


            </>
        )
    }


}

export default withAuth0(Update);