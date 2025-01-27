import React from 'react';
import './Instructors.css';

const InstructorCard = ({ instructor }) => {
  return (
    <div
      className="instructor-card"
      style={{ backgroundImage: `url(${instructor.backgroundImage})` }}
    >
      <div className="profile-picture">
        <img src={instructor.image} alt={instructor.name} />
      </div>
      <div className="instructor-info">
        <h3>{instructor.name}</h3>
        <p>{instructor.description}</p>
      </div>
    </div>
  );
};

export default InstructorCard;