import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import GamesCard from './gamesCard';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
class Game extends Component {

    render() {
        return (
            <>
            <Container>
            <Row  xs={1} md={3} className="g-4" className="justify-content-between" >
                {this.props.gameData.map(item => {
                    return (
                        <Col>
                        <GamesCard
                        Title={item.Title}
                            Poster={item.Poster}
                            Type={item.Type}
                            Year={item.Year}
                            
                        />
                        <Button onClick={this.props.addGameHandler} type='button'>Save changes</Button>
                        </Col>
                        
                    );

                })
                }
                </Row>
                </Container>
            </>

        );
    }
}

export default Game;