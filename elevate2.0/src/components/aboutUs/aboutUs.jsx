import React from 'react';
import './aboutUs.css';

const AboutUsSection = () => {
    const paraOne = "Welcome to Elevate Academy, Jammu's first-of-its-kind creative learning hub for Music, Graphic Design, and Video Editing. We're dedicated to nurturing talent, offering personalized mentorship, and providing industry-relevant training through seasoned professionals with over 5 years of experience."
    const paraTwo = "Our mission is to empower budding artists, designers, and storytellers to achieve professional success with hands-on training, state-of-the-art facilities, and a supportive creative community. At Elevate Academy, we don't just teach skills - we inspire confidence, spark creativity, and help turn dreams into reality. Together, let's elevate your potential.";

    return (
        <div className='about-us-block'>
            <h1 className='about-us-title' >About Us</h1>
            <p className='about-us-content'>{paraOne}</p>
            <p className='about-us-content'>{paraTwo}</p>
        </div>
    );
}

export default AboutUsSection;