import React from 'react';
import { useParams } from 'react-router-dom';
import './Courses.css';

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL

  // Example course data (replace with actual data fetching logic)
  const courses = [
    {
      id: 1,
      title: 'Film Making',
      description: 'Learn the fundamentals of React.',
      image: 'https://via.placeholder.com/150',
      details: 'This course covers the basics of React, including components, state, and props.',
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Master advanced React concepts.',
      image: 'https://via.placeholder.com/150',
      details: 'This course dives into advanced topics like hooks, context, and performance optimization.',
    },
    {
      id: 3,
      title: 'Music Production',
      description: 'Learn Redux and Context API.',
      image: 'https://via.placeholder.com/150',
      details: 'This course teaches state management using Redux and the Context API.',
    },
  ];

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <p>{course.details}</p>
    </div>
  );
};

export default CourseDetail;