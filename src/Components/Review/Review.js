import React from 'react';
import './Review.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import review1 from '../../img/review/01.jpg';
import review2 from '../../img/review/02.jpg';
import review3 from '../../img/review/03.jpg';
import review4 from '../../img/review/04.jpg';
import review5 from '../../img/review/05.jpg';
import review6 from '../../img/review/06.jpg';
import review7 from '../../img/review/07.jpg';
import review8 from '../../img/review/08.jpg';
import review9 from '../../img/review/09.jpg';
import review10 from '../../img/review/10.jpg';
import review11 from '../../img/review/11.jpg';
import review12 from '../../img/review/12.jpg';
import review13 from '../../img/review/13.jpg';
import review14 from '../../img/review/14.jpg';
import { Link } from 'react-router-dom';

const review = () => {
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
        <div className="section_bg">
            <div className="container">
                <div className="section_top">
                    <h5 className="section_title">Latest Reviews</h5>
                    <Link to="/" className="button">view more</Link>
                </div>
                <Slider {...settings} className="pt-5">

                    <div class="review_card">
                        <img src={review5} alt="review5" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review2} alt="review2" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review3} alt="review3" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review4} alt="review4" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review1} alt="review1" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review6} alt="review6" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review7} alt="review7" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review8} alt="review8" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review9} alt="review9" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review10} alt="review10" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review11} alt="review11" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review12} alt="review12" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review13} alt="review13" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
                                </Fade>
                            </div>
                            <Fade right>
                                <p className="movie_name">Apotek</p>
                            </Fade>
                        </div>
                    </div>
                    <div class="review_card">
                        <img src={review14} alt="review14" className="review_image"></img>
                        <div className="review_details">
                            <div className="review_info">
                                <Fade top>
                                    <p className="review_source">Netflix</p>
                                </Fade>
                                <Fade bottom>
                                    <p className="review">Review</p>
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

export default review;