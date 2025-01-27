import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`); 
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <img src={course.image} alt={`Course ${course.id}`} />
    </div>
  );
};

export default CourseCard;