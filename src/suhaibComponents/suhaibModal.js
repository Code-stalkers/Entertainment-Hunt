import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
class Update extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            gameData: this.props.gameData,
            gameid: '',
            Title:'',
            Poster: '',
            Type: '',
            Year: '',
        })
        console.log(this.props.gameData,)
    }
    showUpdateForm = () => {
        this.setState({
            Title: this.props.gameData[0].Title,
            Poster: this.props.gameData[0].Poster,
            Type: this.props.gameData[0].Type,
            Year: this.props.gameData[0].Year,
            gameid: this.props.gameData[0]._id,
            comment: '',
        })
    }

    addTofavs = (event) => {
        event.preventDefault();
        const { user } = this.props.auth0;
        const email = user.email;
        const obj = {
            Title: this.state.Title,
            Poster:this.state.Poster,
            Type:this.state.Type,
            Year: this.state.Year,
            email: email,
            comment: event.target.value,
        }
        console.log(obj.comment)
        axios
            .put(`http://localhost:3001/updateCommentHandler/${this.state.gameid}`, obj)
            .then(result => {
                this.setState({
                    gameData: result.data,

                })
                console.log(result.data)
            })
            .catch(err => {
                console.log('error in updating the data');
            })
    }
    //     addGameHandler = (Title,Poster,Type,Year) => {
    //         const { user } = this.props.auth0;
    //       let email = user.email;
    //       console.log(this.state.gameData,'hello');

    //       const obj = {
    //         Title:this.state.gameData[0].Title,
    //         Poster:this.state.gameData[0].Poster,
    //         Type:this.state.gameData[0].Type,
    //         Year:this.state.gameData[0].Year,
    //         email:email




    //       }
    //       axios.post(`http://localhost:3001/addGame`, obj)
    //         .then(result => {
    //           this.setState({
    //             gameData: result.data
    //           })
    //         })
    //         .catch(err => {
    //           console.log('error');
    //         })



    //     }

    render() {
        return (

            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onClick={this.addTofavs} >
                            <Form.Group className="mb-3" name="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button type='submit' onClick={()=>this.addTofavs(this.props.gameData)}>Save changes</Button>
                            </Form>
                            
                            <Button onClick={this.props.addGameHandler}  type='button'> fav</Button>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }


}

export default withAuth0(Update);