import React from 'react';
import './ComingSoon.css';
import { Link } from 'react-router-dom';
import comingSoon01 from '../../img/coming_soon/01.jpg';
import comingSoon02 from '../../img/coming_soon/02.jpg';
import comingSoon03 from '../../img/coming_soon/03.jpg';
import comingSoon04 from '../../img/coming_soon/04.jpg';
import comingSoon05 from '../../img/coming_soon/05.jpg';
import comingSoon06 from '../../img/coming_soon/06.jpg';
import comingSoon07 from '../../img/coming_soon/07.jpg';

const ComingSoon = () => {
    return (
        <div className="section_bg">
            <div className="container">
                <div className="section_top">
                    <h5 className="section_title">coming soon</h5>
                    <Link to="/" className="button">view more</Link>
                </div>
                <div className="row pt-5">
                    <div className="col-md-4">
                        <div class="card">
                            <img src={comingSoon01} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                    <div class="card">
                            <img src={comingSoon02} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                    <div class="card">
                            <img src={comingSoon03} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-3 mt-3">
                    <div class="card">
                            <img src={comingSoon04} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                    <div class="card">
                            <img src={comingSoon05} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                    <div class="card">
                            <img src={comingSoon06} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                    <div class="card">
                            <img src={comingSoon07} className="img-fluid coming_soon_image" alt="coming soon 02" />
                            <div class="card-img-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#eee" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                <div className="coming_soon_details">
                                    <h5 className="coming_soon_title">Fire Neophyte One</h5>
                                    <div className="coming_soon_info">
                                        <p>adventure</p>
                                        <p>coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ComingSoon;