import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css';
import course1 from './assets/FilmMaking.png';
import course2 from './assets/GraphicDesign.png';
import course3 from './assets/MusicImage.png';


const Courses = () => {
  const courses = [
    {
      id: 1,
      image: course1,
    },
    {
      id: 2,
      image: course2,
    },
    {
      id: 3,
      image: course3,
    }
  ];

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