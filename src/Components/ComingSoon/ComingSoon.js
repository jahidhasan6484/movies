import React from 'react';
import './ComingSoon.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import comingSoon1 from '../../img/coming_soon/01.jpg';
import comingSoon2 from '../../img/coming_soon/02.jpg';
import comingSoon3 from '../../img/coming_soon/03.jpg';
import comingSoon4 from '../../img/coming_soon/04.jpg';
import comingSoon5 from '../../img/coming_soon/05.jpg';
import comingSoon6 from '../../img/coming_soon/06.jpg';
import comingSoon7 from '../../img/coming_soon/07.jpg';
import comingSoon8 from '../../img/coming_soon/08.jpg';
import comingSoon9 from '../../img/coming_soon/09.jpg';
import comingSoon10 from '../../img/coming_soon/10.jpg';
import comingSoon11 from '../../img/coming_soon/11.jpg';
import comingSoon12 from '../../img/coming_soon/12.jpg';
import comingSoon13 from '../../img/coming_soon/13.jpg';
import comingSoon14 from '../../img/coming_soon/14.jpg';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 411,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className="coming_soon">
            <div className="container">
                <div className="section_top">
                    <h5 className="section_title">Latest Reviews</h5>
                    <Link to="/" className="button">view more</Link>
                </div>
                <Slider {...settings} className="pt-5">

                    <div class="comingSoon_card">
                        <img src={comingSoon5} alt="comingSoon5" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon2} alt="comingSoon2" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon3} alt="comingSoon3" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon4} alt="comingSoon4" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon1} alt="comingSoon1" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon6} alt="comingSoon6" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon7} alt="comingSoon7" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon8} alt="comingSoon8" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon9} alt="comingSoon9" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon10} alt="comingSoon10" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon11} alt="comingSoon11" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon12} alt="comingSoon12" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon13} alt="comingSoon13" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="comingSoon_card">
                        <img src={comingSoon14} alt="comingSoon14" className="comingSoon_image"></img>
                        <div className="comingSoon_details">
                            <div className="comingSoon_info">
                                <Fade top>
                                    <p className="comingSoon_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="comingSoon_review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>

    );
};

export default ComingSoon;