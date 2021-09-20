import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './cards.scss'
import Button from 'react-bootstrap/Button';


class GamesCard extends Component {
    render() {
        return (
            < Card className="gamesCard">
                <Card.Img variant="top" src={this.props.Poster} className='cardimage' />
                <Card.Body>
                    <Card.Title>{this.props.Title}</Card.Title>
                    <Card.Text>
                        {this.props.Type}
                    </Card.Text>

                    <Card.Text>
                        Released Date: {this.props.Year}
                    </Card.Text>

                    <a href={this.props.Poster} rel='noreferrer' target='_blank'>Full Poster</a>
                </Card.Body>
                <Button  onClick={this.props.addGameHandler} type='button'>Save changes</Button>

            </Card >
        );
    }
}

export default GamesCard;