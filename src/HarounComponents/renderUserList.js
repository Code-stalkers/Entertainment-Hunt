import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Profile2 from "../suhaibComponents/profile2";


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
            .get(`http://localhost:3001/userAddingList?email=${email}`)
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



    

   

    render() {
        return (

            <>
                <button onClick={this.fasopfdmjsdpo}>fsddfasdf</button>


             
                {this.state.Array.map(item => {
                    return (

                        <p>{item.Title}</p>)
                })}
              


            </>
        )
    }


}

export default withAuth0(Update);