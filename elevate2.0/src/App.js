import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Courses from './components/Courses/Courses';
import CourseDetail from './components/Courses/CourseDetail';
import Instructors from './components/Instructors/Instructors';
import AboutUsSection from './components/aboutUs/aboutUs';
import SocialDetails from './components/socialDetails/SocialDetails';
import InstagramHandle from './components/instagramHandle/InstagramHandle';
import Footer from './components/Footer/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <AboutUsSection />
      <Instructors />
      <InstagramHandle />
      <SocialDetails />
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router basename="/Elevate">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;