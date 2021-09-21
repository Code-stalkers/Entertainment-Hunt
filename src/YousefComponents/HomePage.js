import React, { Component } from 'react'
import './home.scss'
import Carousel from 'react-bootstrap/Carousel'
import { Card, Button } from 'react-bootstrap/';
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

class HomePage extends Component {

    render() {

        return (
            <>

                <div>
                    <Carousel className="carosel">
                        <Carousel.Item interval={800}>
                            <img style={{ height: 'px' }}
                                className="d-block w-100 "
                                src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
                                alt="MOVIES"
                            />
                            <Carousel.Caption>
                                <h3>MOVIES</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={800}>
                            <img
                                className="d-block w-100 "
                                src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                                alt="GAMES"
                            />
                            <Carousel.Caption>
                                <h3>GAMES</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={800}>
                            <img
                                className="d-block w-100 "
                                src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                                alt="cryptocurrencies"
                            />
                            <Carousel.Caption>
                                <h3>cryptocurrencies</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
                <div>


                    <CardGroup style={{ gap: "50px", margin: "50px" }}>
                        <Card className="Yousef-card">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/100px160" />
                            <Card.Body>
                                <Card.Title>MOVIES</Card.Title>
                                <Card.Text>
                                    Movies affect many of us powerfully because the combined impact of images, music, dialogue, lighting, sound and special effects can elicit deep feelings and help us reflect on our lives. They can help us to better understand our own lives, the lives of those around us and even how our society and culture operate.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/movie">
                                    <MDBBtn className='mx-2' color='dark' className="is-rounded">
                                        <span>Visit Page</span>
                                    </MDBBtn>
                                </Link>

                                {/* <Button>Go to details</Button> */}

                            </Card.Footer>
                        </Card>
                        <Card className="Yousef-card">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80/100px160" />
                            <Card.Body>
                                <Card.Title>GAMES</Card.Title>
                                <Card.Text>
                                    Studies have shown that playing video games regularly may increase gray matter in the brain and boost brain connectivity. (Gray matter is associated with muscle control, memories, perception, and spatial navigation.)
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/game">
                                    <MDBBtn className='mx-2' color='dark' className="is-rounded">
                                        <span>Visit Page</span>
                                    </MDBBtn>
                                </Link>

                            </Card.Footer>
                        </Card>
                        <Card className="Yousef-card">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80/100px160" />
                            <Card.Body>
                                <Card.Title>cryptocurrencies</Card.Title>
                                <Card.Text>
                                    A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions. Much of the interest in these unregulated currencies is to trade for profit, with speculators at times driving prices skyward.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/">
                                    <MDBBtn className='mx-2' color='dark' className="is-rounded">
                                        <span>Visit Page</span>
                                    </MDBBtn>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </CardGroup>

                </div>
                <div>

                </div>
                <div style={{ textAlign: 'center' }} className="home">
                    Entertainment is an online database of information related to films, television programs,<br /> home videos,
                    video games, and streaming content online – including cast, <br />
                    production crew and personal biographies,
                    plot summaries, trivia, ratings.
                </div>
                <br /><br /><br /><br /><br /><br />


            </>
        )
    }
}

export default HomePage;

