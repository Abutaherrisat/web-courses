import React from 'react';
import './DefaultCourses.css'

const DefaultCourses = (Props) => {
    const { name, img,  description, price } = Props.course
    return (
        <div className="col  ">
            <div className="card container ">
               <div className ="text-center p-4">
               <img src={img} className=" img-style card-img-top w-75" alt="..." />
               </div>
                <div className="card-body text-white">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h5> Price: {price}</h5>
                   <div className ="text-center mt-4">
                   <button className='btn-regular'>Enroll Now</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultCourses;