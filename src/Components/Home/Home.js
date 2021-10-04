import React, { useEffect, useState } from 'react';

import courseData from '../Data/FakeData'
import DefaultCourses from '../DefaultCourses/DefaultCourses';


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(courseData)
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4   ">
            {
                courses.map(course =><DefaultCourses
                course ={course}
                
                ></DefaultCourses>).slice(0,4)
            }
        </div>
     
    );
};

export default Home;