import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import GamesCard from './gamesCard';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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