import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Courses from './components/Courses/Courses';
import CourseDetail from './components/Courses/CourseDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <Courses />
            </div>
          } />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;