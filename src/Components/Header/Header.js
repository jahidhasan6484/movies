import React from 'react';
import './Header.css';
// import Hamburger from 'hamburger-react';
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid custom_container">
                    <Link className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="yellow" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg></Link>
                    <span className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Hamburger color="#eee" size="20" duration={0.5}/>
                       
                    </span>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Coming soon</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Reviews</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">News &amp; Gossips</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Pages</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Home />
        </>
    );
};

export default Header;