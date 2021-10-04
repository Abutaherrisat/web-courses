import React, { useEffect, useState } from 'react';
import './Courses.css'
import courseData from '../Data/FakeData'
import Course from '../Course/Course'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(courseData)
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3   ">


            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>



    );
};

export default Courses;