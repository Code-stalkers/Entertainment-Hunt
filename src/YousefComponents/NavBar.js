
import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Nav, Container, Card, Modal, Button } from 'react-bootstrap';
import LoginButton from './loginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import ModalInfo from './modal'
export class NavBar extends Component {






    constructor(props) {
        super(props);
        this.state = {
            show: false,

        }
    }

    handleShow = () => {

        this.setState({

            show: true,
        })
        console.log("hello");
        console.log(this.state.show);
    }


    handleClose = () => {

        this.setState({

            show: false,
        })
    }




    render() {


        return (
            <div>

                <ModalInfo close={this.handleClose}
                    show={this.state.show} />

                {console.log(this.props.auth0.isAuthenticated)};
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Entertainment-Hunt</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Button variant="primary" onClick={this.handleShow}>
                                    Profile
                                </Button>

                               
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                                {this.props.isAuthenticated ? <LogoutButton /> : <LoginButton />
                                }<LogoutButton />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default withAuth0(NavBar);