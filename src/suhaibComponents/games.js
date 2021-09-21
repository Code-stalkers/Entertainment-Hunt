import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Notification } from 'rsuite';
class Game extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

     open= function () {
        Notification.open({
          title: 'added',
          duration: 20000,
        //   description: <Paragraph style={{ width: 320 }} rows={2} />
        });
      }

    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={3} className="g-4" className="justify-content-between" >
                        {this.props.favGamesArr.map(item => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem', height: 'contentFit' }} onClick={this.props.handleShow}>
                                        <Card.Img variant="top" src={item.Poster} />
                                        <Card.Body>
                                            <Card.Title>{item.Title}</Card.Title>
                                            <Card.Text>
                                                {item.Type}  {item.Year}
                                            </Card.Text>
                                            <Button variant="primary"  onClick={this.open} onClick={() => this.props.addGameHandler(item)} >fav</Button>
                                        </Card.Body>
                                    </Card>






                                    {/* <GamesCard handleShow={this.props.handleShow}
                        Title={item.Title}
                            Poster={item.Poster}
                            Type={item.Type}
                            Year={item.Year}
                            
                        /> */}


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
