
import React from 'react';
// import OurImages from './src/YousefComponents/OurImages'
import './Home.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function App() {


    return (
        <div className="app">

            <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" width="640" height="360" alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left align-self-center">
                                        {/* <h1 class="h1 text-success"></h1> */}
                                        <h1 class="h1">Movies</h1>
                                        <p class="p1">
                                            Movies affect many of us powerfully because the combined impact of images, music, dialogue, lighting, sound and special effects can elicit deep feelings and help us reflect on our lives. They can help us to better understand our own lives, the lives of those around us and even how our society and culture operate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        {/* <h1 class="h1">Lorem Ipsum</h1> */}
                                        <h1 class="h1">GAMES</h1>
                                        <p class="p1">
                                            Studies have shown that playing video games regularly may increase gray matter in the brain and boost brain connectivity. (Gray matter is associated with muscle control, memories, perception, and spatial navigation.)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        {/* <h1 class="h1">Lorem Ipsum</h1> */}
                                        <h1 class="h1">CRYPTOCURRENCY</h1>
                                        <p class="p1">
                                            A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions. Much of the interest in these unregulated currencies is to trade for profit, with speculators at times driving prices skyward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <section class="container py-5">
                <div class="container py-5">
                    <div class="row text-center py-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">OUR SERVICES</h1>
                            <p>
                                FUNTER is a web-Application contains information related to films, television programs,home videos,
                                video games, and streaming content online – including
                                personal biographies,
                                plot summaries, trivia, ratings.
                            </p>
                        </div>
                    </div><br /><br />
                    <div class="row">
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <a href="#">
                                    <img src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/100px160" class="card-img-top" alt="..." />
                                </a>
                                <div class="card-body">
                                    {/* <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right">$240.00</li>
                                    </ul> */}
                                    <a href="#" class="h2 text-decoration-none text-dark">MOVIES </a> <br /><br />
                                    <p class="card-text">
                                    Movies affect many of us powerfully because the combined impact of images, music, dialogue, lighting, sound and special effects can elicit deep feelings and help us reflect on our lives. </p><br/>
                                    <Link to="/movie">
                                        <MDBBtn className='mx-2' color='dark' className="is-rounded">
                                            <span>Visit Page</span>
                                        </MDBBtn>
                                    </Link>
                                    {/* <p class="text-muted">Reviews (24)</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <a href="#">
                                    <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80/100px160" class="card-img-top" alt="..." />
                                </a>
                                <div class="card-body">
                                    {/* <ul class="list-unstyled d-flex justify-content-between"> */}
                                    {/* <li> */}
                                    {/* <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i> */}
                                    {/* </li> */}
                                    {/* <li class="text-muted text-right">$480.00</li> */}
                                    {/* </ul> */}
                                    <a href="#" class="h2 text-decoration-none text-dark">GAMES </a><br /><br />
                                    <p class="card-text">
                                    games allow us to experience emotions that are closely related to the main factors of happiness. Thus, we play games because they make us happy.                                    </p><br /><br />
                                    <Link to="/game">
                                        <MDBBtn className='mx-2' color='dark' className="is-rounded">
                                            <span>Visit Page</span>
                                        </MDBBtn>
                                    </Link>
                                    {/* <p class="text-muted">Reviews (48)</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <a href="#">
                                    <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80/100px160" class="card-img-top" alt="..." />
                                </a>
                                <div class="card-body">
                                    {/* <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right">$360.00</li>
                                    </ul> */}
                                    <a href="#" class="h2 text-decoration-none text-dark">CRYPTO </a><br /><br />
                                    <p class="card-text">

                                  
Cryptocurrencies are digital assets people use as investments and for online purchases. You exchange real currency, like dollars, to buy “coins” or “tokens” of a certain kind of cryptocurrency..                                  </p><br />
                                    <Link to="/crypto">
                                        <MDBBtn className='mx-2' color='dark' className="is-rounded">
                                            <span>Visit Page</span>
                                        </MDBBtn>
                                    </Link>
                                    {/* <p class="text-muted">Reviews (74)</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-light">
                <div class="row text-center pt-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">OUR TEAM</h1>
                        <p>
                            We're a Group of 5 Web-Developers who made this website for the sake of enjoyment,our team is the secret to our success. Each of our members is amazing in their own right, but together they are what makes Funter such a fun and rewarding place to work.
                        </p>
                    </div>
                </div>
                {/* <div id="images" class="row">
                    <div id="example" class="col-12 col-md-4 p-5 mt-3">
                        <a><img src="https://scontent.famm11-1.fna.fbcdn.net/v/t1.6435-9/149175500_5328126460538769_623588383074290637_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeExOz4MTqiLkN28ab8pDFz1cU6oxlR_mQdxTqjGVH-ZB18m1Xm7ZbGMCasloX-HoA_HCuf_Xu4ccbFh9jq58SU4&_nc_ohc=gSBcvc5oIkcAX9lGqEh&_nc_ht=scontent.famm11-1.fna&oh=0e29bec682a314e9a27d957c3267224c&oe=616DC538" class="rounded-circle img-fluid border" /><div class="content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></a>
                        <h5 class="text-center mt-3 mb-3">AHMAD</h5>


                    </div>
                    <div id="example" class="col-12 col-md-4 p-5 mt-3">
                        <a><img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/208348390_321996862904824_8845605057565977723_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEIIZ8OItfhKPkxucV6XLhraGsbDhLa-5doaxsOEtr7lz2iRHD74D-RSkFxwnAyqMwD0dM9U9zoEi1za18tjPvf&_nc_ohc=g9A-fXSKCA8AX88LqaY&tn=PUk4iEV7rP1yuec7&_nc_ht=scontent.famm10-1.fna&oh=259259374a42245f19113eef9990788e&oe=616F64E6" class="rounded-circle img-fluid border" /><div class="content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></a>
                        <h2 class="h5 text-center mt-3 mb-3">YOUSEF</h2>


                    </div>
                    <div id="example" class="col-12 col-md-4 p-5 mt-3">
                        <a><img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/170748298_10221712234167649_2359846898020945130_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFJ7S-dgj7tymrZLy-KN-c-L6NYbYJNHGovo1htgk0casaDLxKkCE1lU3jLjevfRLi-Rh6OCYgQG_pCNCnzHViI&_nc_ohc=fiqnnmICgsoAX_65WTv&tn=PUk4iEV7rP1yuec7&_nc_ht=scontent.famm10-1.fna&oh=d9601583a66eb19be751825959c76797&oe=616E9BFD" class="rounded-circle img-fluid border" /><div class="content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></a>
                        <h2 class="h5 text-center mt-3 mb-3">SUHAIB</h2>
                    </div>

                    <div id="example" class="col-12 col-md-4 p-5 mt-3">
                        <a><img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/81028245_2719789814726188_2044218924668551168_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGa0JjkTMJovj04ZapQPv8PH07PjXLbn7cfTs-Nctuft7whP1D6oJT5cBQ-M6BY3ObGjWrbWf4FaSCsaihp_Z1m&_nc_ohc=BJjc-biFydIAX_IfOK9&_nc_ht=scontent.famm10-1.fna&oh=46b802606eb9788b0df6e856b23354d9&oe=6170D23D" class="rounded-circle img-fluid border" /><div id="fontss" class="content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div></a>
                        <h2 class="h5 text-center mt-3 mb-3">MOHAMMAD</h2>

                    </div>
                </div> */}
               
                <div class="container d-flex justify-content-center">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card1 p-3 py-4 mt-5 mb-5">
                                <div class="text-center"> <img src="https://scontent.famm11-1.fna.fbcdn.net/v/t1.6435-9/149175500_5328126460538769_623588383074290637_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeExOz4MTqiLkN28ab8pDFz1cU6oxlR_mQdxTqjGVH-ZB18m1Xm7ZbGMCasloX-HoA_HCuf_Xu4ccbFh9jq58SU4&_nc_ohc=gSBcvc5oIkcAX9lGqEh&_nc_ht=scontent.famm11-1.fna&oh=0e29bec682a314e9a27d957c3267224c&oe=616DC538" width="100" class="rounded-circle" />
                                    <h3 class="mt-2">Ahmad Bani-Salameh</h3> <br/> <span class="mt-1 clearfix">Web Developer</span> <small class="mt-4">I am an android developer working at google Inc at Amman, JOR</small>
                                    <div class="social-buttons mt-5"> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card1 p-3 py-4 mt-5">
                                <div class="text-center"> <img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/208348390_321996862904824_8845605057565977723_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEIIZ8OItfhKPkxucV6XLhraGsbDhLa-5doaxsOEtr7lz2iRHD74D-RSkFxwnAyqMwD0dM9U9zoEi1za18tjPvf&_nc_ohc=g9A-fXSKCA8AX88LqaY&tn=PUk4iEV7rP1yuec7&_nc_ht=scontent.famm10-1.fna&oh=259259374a42245f19113eef9990788e&oe=616F64E6" width="100" class="rounded-circle" />
                                    <h3 class="mt-2">Yousef Obeidat</h3> <br/><span class="mt-1 clearfix">Web-Developer</span> <small class="mt-4">I am a trainee as a Web Developer at LTUC Inc at Amman,JOR</small>
                                    <div class="social-buttons mt-5"> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card1 p-3 py-4 mt-5">
                                <div class="text-center"> <img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/170748298_10221712234167649_2359846898020945130_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFJ7S-dgj7tymrZLy-KN-c-L6NYbYJNHGovo1htgk0casaDLxKkCE1lU3jLjevfRLi-Rh6OCYgQG_pCNCnzHViI&_nc_ohc=fiqnnmICgsoAX_65WTv&tn=PUk4iEV7rP1yuec7&_nc_ht=scontent.famm10-1.fna&oh=d9601583a66eb19be751825959c76797&oe=616E9BFD" width="100" class="rounded-circle" />
                                    <h3 class="mt-2">Suhib Okour</h3> <br/><span class="mt-1 clearfix">Java Architect</span> <small class="mt-4">I am an JavaScipt developer working at LTUC Inc at Amman, JOR</small>
                                    <div class="social-buttons mt-5"> </div>
                                </div>
                            </div>
                        </div>


                        <center id="center">

                        <div class="col-md-4">
                            <div class="card1 p-3 py-4 mt-5">
                                <div class="text-center"> <img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/81028245_2719789814726188_2044218924668551168_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGa0JjkTMJovj04ZapQPv8PH07PjXLbn7cfTs-Nctuft7whP1D6oJT5cBQ-M6BY3ObGjWrbWf4FaSCsaihp_Z1m&_nc_ohc=sID6Wot7CEUAX89hm4J&_nc_ht=scontent.famm10-1.fna&oh=f1fb19761883ae2801659ef81d3f2f86&oe=6170D23D" width="100" class="rounded-circle" />
                                    <h3 class="mt-2">Mohammad Haroun</h3> <br/><span class="mt-1 clearfix">Java Architect</span> <small class="mt-4">I am an Java Architect working at google Inc at Amman, JOR</small>
                                    <div class="social-buttons mt-5"> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card1 p-3 py-4 mt-5">
                                <div class="text-center"> <img src="https://scontent.famm10-1.fna.fbcdn.net/v/t1.15752-9/242483879_4266730030049209_1172719443005903381_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEIyscP--xb53rbG_pKPtKGDPvKwKWTnFkM-8rApZOcWSiI7yapI4zqOqNlDyhGPtrJTvChCKhNiRyDG7PaYPYh&_nc_ohc=ME73F4HFNigAX-noocf&_nc_ht=scontent.famm10-1.fna&oh=9389d5eb695e4d9c65c45717d2c1ff07&oe=61701898" width="100" class="rounded-circle" />
                                    <h3 class="mt-2">Marwan Zakia</h3> <br/><span class="mt-1 clearfix">Java Architect</span> <small class="mt-4">I am a web developer working at FUNTER Inc at Amman, JOR</small>
                                    <div class="social-buttons mt-5">  </div>
                                </div>
                            </div>
                            
                        </div>
                        </center>

                  </div>

                </div>


            </section>



        </div>
    );
}