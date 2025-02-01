import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css';
import { courses } from './courseData';


const Courses = () => {
  return (
    <div className="courses-section">
      <h1>Our Courses</h1>
      <div className="courses-scroll-container">
        <div className="courses-list">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;