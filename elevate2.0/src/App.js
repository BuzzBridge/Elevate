import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import CourseDetail from './components/Courses/CourseDetail';
import Instructors from './components/Instructors/Instructors';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Instructors/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;