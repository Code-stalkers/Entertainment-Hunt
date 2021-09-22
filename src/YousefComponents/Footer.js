// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import { MDBBtn } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter backgroundColor='red' className='text-center text-lg-left'>
//       <MDBContainer className='p-4'>
//         <MDBRow>
//           <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
//             <h5 className='text-uppercase'>Footer Content</h5>

//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
//               pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
//               cumque eum delectus sint!
//             </p>
//           </MDBCol>

//           <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//             <h5 className='text-uppercase'>Links</h5>

//             <ul className='list-unstyled mb-0'>
//               <li>
//               <MDBBtn>Primary</MDBBtn>
//               </li>
//               <li>
//               <br/>

//               <MDBBtn>Primary</MDBBtn>
//               </li>
//               <li>
//               <br/>

//               <MDBBtn>Primary</MDBBtn>
//               </li>
//               <br/>
//               <li>
//               <MDBBtn>Primary</MDBBtn>
//               </li>
//             </ul>
//           </MDBCol>

//           <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
//             <h5 className='text-uppercase'>Links</h5>

//             <ul className='list-unstyled mb-0'>
//               <li>
//               <MDBBtn>Primary</MDBBtn>
//               </li>
//               <li>
//               <br/>

//               <MDBBtn>Primary</MDBBtn>
//               </li>
//               <li>
//               <br/>

//               <MDBBtn>Primary</MDBBtn>
//               </li>
//               <br/>
//               <li>
//               <MDBBtn>Primary</MDBBtn>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         &copy; {new Date().getFullYear()}{' '}
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }


import React, { Component } from 'react'
import logo from './logo.png';

export class footer extends Component {
  render() {
    return (
      <div>
               <footer class="bg-dark" id="tempaltemo_footer">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-success border-bottom pb-3 border-light logo">
                            <img style={{objectFit:"cover", width:"200px", height:"200px"}} src={logo} />

                            </h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li>
                                    <i class="fas fa-map-marker-alt fa-fw"></i>
                                    JORDAN
                                </li>
                                <li>
                                    <i class="fa fa-phone fa-fw"></i>
                                    <a class="text-decoration-none" href="#">+962-779-985647</a>
                                </li>
                                <li>
                                    <i class="fa fa-envelope fa-fw"></i>
                                    <a class="text-decoration-none" href="#">Code-Stalkers@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-light border-bottom pb-3 border-light">Content</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="/movie">MOVIES</a></li>
                                <li><a class="text-decoration-none" href="/game">GAMES</a></li>
                                <li><a class="text-decoration-none" href="/crypto">CRYPTO CURRENCIES</a></li>
                                {/* <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                                <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                                <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                                <li><a class="text-decoration-none" href="#">Sport Shoes</a></li> */}
                            </ul>
                        </div>

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="#">Home</a></li>
                                <li><a class="text-decoration-none" href="#">About Us</a></li>
                                <li><a class="text-decoration-none" href="#">FAQs</a></li>
                                <li><a class="text-decoration-none" href="#">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="row text-light mb-4">
                        <div class="col-12 mb-3">
                            <div class="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div class="col-auto me-auto">
                            <ul class="list-inline text-left footer-icons">
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-auto">
                            <label class="sr-only" for="subscribeEmail">Email address</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div class="input-group-text btn-success text-light">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-100 bg-black py-3">
                    <div class="container">
                        <div class="row pt-2">
                            <div class="col-12">
                                <p class="text-left text-light">
                                    Copyright &copy; 2021 Code Stalkers
                                    {/* | Designed by <a rel="sponsored" href="#" target="_blank">Jassa</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
      </div>
    )
  }
}

export default footer

