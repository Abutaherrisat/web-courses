import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'



const Footer = () => {
    const location = <FontAwesomeIcon icon={faMapMarker} />
    const message = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />

    return (
        <div className="footer-container d-flex w-100 pt-10">
            <div className="col-md-4 ms-5 text-white ">
                <h2>Web Developement Course</h2>
                <p>{location} Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p>{message} Official: web@programming-hero.com</p>
                <p>{phone} Helpline : 01322810867 (Available : 09:00am to 7:00pm)</p>


            </div>
            <div className="col-md-3 ms-5 text-white ">

                <ul>
                    <p className="icon"> <i class="fab fa-instagram-square"></i></p>
                    <p className="icon"><i class="fab fa-facebook"></i></p>
                    <p className="icon"><i class="fab fa-twitter"></i></p>
                </ul>


            </div>
            <div className="col-md-3 ms-5 text-white ">
                <h3>pay with</h3>

                <ul>
                    <p>BKASH</p>
                    <p>G-pay</p>
                    <p>NOGOD</p>
                    <p>ROCKET</p>

                </ul>


            </div>
        </div>
    );
};

export default Footer;