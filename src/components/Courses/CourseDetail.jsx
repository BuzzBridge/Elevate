import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';
import { courses } from './courseData';


const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL

  const course = courses.find((course) => course.id === parseInt(id));
  if (!course) {
    return <div>Course not found!</div>;
  }

  const imageLink = [];
  course.courseDetailImages.forEach((imageName) => {
    imageLink.push(require(`./assets/images/` + imageName));
  });
  const backgroundImage = require('./assets/images/' + course.backgroundImage);
  const courseDetailHeaderImage = require(`./assets/images/`+course.courseDetailHeader);

  return (
    <div className="course-detail" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={courseDetailHeaderImage} alt={`${course.courseDetailHeader}`} className="course-detail-main" />
      {imageLink.map((image, index) => (
        <img
          key={index} // Use index as the key (or a unique identifier if available)
          src={image}
          alt={`${course.title} - ${index + 1}`}
          className="course-image"
        />
      ))}
    </div>
  );
};

export default CourseDetail;