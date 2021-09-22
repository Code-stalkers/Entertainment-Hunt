
// import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar';
// import { NavDropdown, Nav, Container, Button } from 'react-bootstrap';
// import LoginButton from './loginButton';
// import LogoutButton from './LogoutButton';
// import { withAuth0 } from '@auth0/auth0-react';
// import ModalInfo from './modal'

// import { MDBBtn } from 'mdb-react-ui-kit';



// export class NavBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: false, }}

//     handleShow = () => {
//         this.setState({
//             show: true,})}


//     handleClose = () => {
//         this.setState({
//             show: false, })}




//     render() {


//         return (
//             <div>

//                 <ModalInfo close={this.handleClose}
//                     show={this.state.show} />

//                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                     <Container>
//                         <Navbar.Brand href="#home">
//                         </Navbar.Brand>

//                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                         <Navbar.Collapse id="responsive-navbar-nav">
//                             <Nav className="me-auto">

//                                 <MDBBtn variant="primary"  onClick={this.handleShow}>
//                                     Profile
//                                 </MDBBtn>


//                                 <Nav.Link href="/">Home</Nav.Link>

//                                 <NavDropdown title="Pages" id="collasible-nav-dropdown">
//                                     <NavDropdown.Item href="/game">Games </NavDropdown.Item>
//                                     <NavDropdown.Item href="/movie"> Movies</NavDropdown.Item>
//                                     <NavDropdown.Item href="/crypto">Coins</NavDropdown.Item>
//                                 </NavDropdown>
//                             </Nav>
//                             <Nav>
//                                 <Nav.Link href="#deets"></Nav.Link>
//                                 <Nav.Link eventKey={2} href="#memes">
//                                 </Nav.Link>
//                                 {this.props.isAuthenticated ? <LogoutButton /> : <LoginButton />
//                                 }<LogoutButton />
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
// </div>

//         )
//     }
// }

// export default withAuth0(NavBar);


import React, { Component } from 'react'
import LoginButton from './loginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import ModalInfo from './modal';
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from './logo.png';
import Button from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


export class Header extends Component {

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
    }


    handleClose = () => {
        this.setState({
            show: false,
        })
    }





    render() {
        return (

            <div >


                {/* <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div class="container text-light">
                    <div class="w-100 d-flex justify-content-between">
                        <div>
                            <i class="fa fa-envelope mx-2"></i>
                            <a class="navbar-sm-brand text-light text-decoration-none" href="#">info@company.com</a>
                            <i class="fa fa-phone mx-2"></i>
                            <a class="navbar-sm-brand text-light text-decoration-none" href="#">010-000-0000</a>
                        </div>
                        <div>
                            <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                            <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                            <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                            <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                        </div>
                    </div>
                </div>
            </nav> */}

                <Navbar style={{ backgroundColor: "#212934" }} class="navbar navbar-expand-lg navbar-light shadow">
                    <div class="container d-flex justify-content-between align-items-center">

                        <a class="navbar-brand text-success logo h1 align-self-center" href="/">
                            FUNTER
                        </a>

                        {/* <button class ="navbar-toggler border-0" type ="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class ="navbar-toggler-icon"></span>
                    </button> */}

                        <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                            <div class="flex-fill">
                                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/">HOME</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/game">GAMES</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/movie">MOVIES</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/crypto">CRYPTO</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/profile">PROFILE</Link>
                                    </li>

                                    {this.props.isAuthinticated ? <LogoutButton /> : <LoginButton />}
                                    <LogoutButton />
                                </ul>

                            </div>
                            <div class="navbar align-self-center d-flex">
                                <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                        <div class="input-group-text">
                                            <i class="fa fa-fw fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                    <i class="fa fa-fw fa-search text-dark mr-2"></i>
                                </a>
                                <a class="nav-icon position-relative text-decoration-none" href="#">
                                    <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                                </a>
                                <a class="nav-icon position-relative text-decoration-none" href="#">
                                    <i class="fa fa-fw fa-user text-dark mr-3"></i>
                                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                                </a> */}
                            </div>
                        </div>

                    </div>
                </Navbar>

                <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="w-100 pt-1 mb-5 text-right">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" method="get" class="modal-content modal-body border-0 p-0">
                            <div class="input-group mb-2">
                                <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                                <button type="submit" class="input-group-text bg-success text-light">
                                    <i class="fa fa-fw fa-search text-white"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;
