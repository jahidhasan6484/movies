import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';
import staff01 from '../../img/staff/01.jpg';
import staff02 from '../../img/staff/02.jpg';
import staff03 from '../../img/staff/03.jpg';


const Staff = () => {
    return (
        <div className="section_bg2">
            <div className="container">
                <div className="section_top">
                    <h5 className="section_title">Staff Picks</h5>
                    <Link to="/" className="button">view more</Link>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 staff_section">

                        <div className="row">
                            <div className="col-md-4 staff_highlights">
                                <h2 className="staff_highlights_title">Bulletproof list of Best WW2 Movies</h2>
                                <Link to="/" className="button">explore</Link>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-4 card card_design p-5 px-3">
                                        <img src={staff01} className="staff_image img-fluid" alt="staff01" />
                                        <h5 className="staff_title">End Of WW2</h5>
                                    </div>
                                    <div className="col-md-4 card card_design p-5 px-3">
                                        <img src={staff02} className="staff_image img-fluid" alt="staff02" />
                                        <h5 className="staff_title">The Bold Red Line</h5>
                                    </div>
                                    <div className="col-md-4 card card_design pt-5 px-3">
                                        <img src={staff03} className="staff_image img-fluid" alt="staff03" />
                                        <h5 className="staff_title">Rage</h5>
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

export default Staff;