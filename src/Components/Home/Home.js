import React from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import image1 from '../../img/01.jpg';
import image5 from '../../img/05.jpg';
import image6 from '../../img/06.jpg';
import image9 from '../../img/09.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={image1} class="img-fluid d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <Fade top>
                            <h5>Life Of A Goose</h5>
                        </Fade>
                        <Fade bottom>
                            <p>The family Anatidae to comprises the genera Anser and Branta</p>
                            <Link to="/" className="home_button"><span>read review</span></Link>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={image5} class="img-fluid d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <Fade top>
                            <h5>Star Warriors</h5>
                        </Fade>
                        <Fade bottom>
                            <p>Story of some woman's struggles in life</p>
                            <Link to="/" className="home_button"><span>read review</span></Link>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={image6} class="img-fluid d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <Fade top>
                            <h5>Gamble Box</h5>
                        </Fade>
                        <Fade bottom>
                            <p>To play and wager on casino games through the Internet</p>
                            <Link to="/" className="home_button"><span>read review</span></Link>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={image9} class="img-fluid d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        <Fade top>
                            <h5>Light of Darkness</h5>
                        </Fade>
                        <Fade bottom>
                            <p>Challenge yourself by playing the only hybrid creature in a world divided between two rival cultures</p>
                            <Link to="/" className="home_button"><span>read review</span></Link>
                        </Fade>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Home;