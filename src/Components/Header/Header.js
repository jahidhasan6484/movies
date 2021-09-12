import React, { useState } from 'react';
import './Header.css';
import Fade from 'react-reveal/Fade';
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid custom_container">
                    <Link className="logo" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="yellow" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg></Link>
                    <div className="navbar_menu">
                        {
                            isOpen && 
                            <Fade right>
                                <ul className="nav_links">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/">Coming soon</Link>
                                <Link className="nav-link" to="/">Reviews</Link>
                                <Link className="nav-link" to="/">News &amp; Gossips</Link>
                                <Link className="nav-link" to="/">Pages</Link>
                            </ul>
                            </Fade>
                        }
                        <Hamburger toggled={isOpen} toggle={setOpen} color="yellow" size="20" duration={0.5} />
                    </div>
                </div>
            </nav>

            <Home />
        </>
    );
};

export default Header;