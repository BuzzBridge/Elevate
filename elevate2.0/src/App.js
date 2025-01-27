import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Courses from './components/Courses/Courses';
import CourseDetail from './components/Courses/CourseDetail';
import Instructors from './components/Instructors/Instructors';
import AboutUsSection from './components/aboutUs/aboutUs';
import './App.css';

function App() {
  return (
    <Router basename="/Elevate">
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <Hero />
              <Courses />
              <AboutUsSection />
            </div>
          } />
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