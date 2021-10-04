import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className ="container">
            <div className ="col-md-7 ">
            <h1 className ="text-info">Hello friends </h1>
            <h4 className ="text-secondary">Here  We provide You The Best Web Devlopement Courses . By The Through Of Course You Can Learn Many New Things Which Are Help You In future.Here We have The Best Programming Team For Your Help.So, I Ensure That if you Enrol The course You Can learn many Interesting part Of Programming</h4>
           
        </div>
        <div className ="col-md-5 mt-5">
             <h1 className="text-primary" >Our Best teachers Name</h1>
            <ul>
                <li>
                   <h5  className ="text-secondary">jankhar Mahbub</h5>
                   
                </li>
                <li>
                   <h5  className ="text-secondary">Anisul Islam</h5>
                   
                </li>
                <li>
                   <h5  className ="text-secondary">Sumit</h5>
                   
                </li>
            </ul>
           
        </div>
        </div>
    );
};

export default About;