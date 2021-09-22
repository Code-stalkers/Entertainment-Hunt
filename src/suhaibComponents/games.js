import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Notification } from 'rsuite';
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // open = function () {
    //     Notification.open({
    //         title: 'added',
    //         duration: 20000,
    //         //   description: <Paragraph style={{ width: 320 }} rows={2} />
    //     });
    // }
    render() {
        return (
            <>


<Container >
                <Row xs={1} md={3} className="g-4">

                    {this.props.favGamesArr.map(item => {

                        return (
                            <Col>
                                <Container >
                                    {['Dark ',].map((variant, idx) => (
                                        <Card bg={variant.toLowerCase()}
                                            key={idx}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: '18rem', height: '31rem' ,marginLeft :'31rem', margin:'70px'}}
                                            className="mb-2" variant="top" border="danger" >

                                            <Card.Img style={{ width: '17.9rem', height: '19rem' }} variant="top" src={item.Poster} />
                                            <Card.Body>
                                                <Card.Title style={{ fontFamily: 'Cursive' }}>{item.Title}</Card.Title>
                                                <Card.Text style={{ fontFamily: 'Cursive' }}>
                                                    <span> {item.Year}   </span>

                                                    <span> {item.Type}   </span>
                                                </Card.Text>

                                                <Button style={{
                                                    position: 'absolute', left: '10px', bottom: '11px', marginLeft: '2rem',
                                                    fontFamily: 'Impact, fantasy'}} onClick={() => this.props.addGameHandler(item)} size="lg" variant="success"> <img height='30px' src='https://img.icons8.com/color/2x/plus.png' />  Add to favorite</Button>
                                            </Card.Body>

                                        </Card>))

                                    }
                                </Container>
                            </Col>


                        );

                    })}

                </Row>
                </Container>




















                {/* <Container>
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





                                </Col>

                            );

                        })
                        }
                    </Row>
                </Container> */}




















            </>

        );
    }
}

export default Game;
