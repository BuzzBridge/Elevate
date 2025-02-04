import React from 'react';
import InstructorCard from './InstructorCard';
import './Instructors.css';


import instructor1Bg from './assets/Sid3.png';
import instructor2Bg from './assets/Dev2.png';
import instructor3Bg from './assets/Siddhanth1.png';
import instructor4Bg from './assets/Mohit4.png';

import instructorProfile2 from './assets/DevProfile.png';
import instructorProfile3 from './assets/SiddhantProfile.png';
import instructorProfile1 from './assets/SiddharthProfile.png';
import instructorProfile4 from './assets/MohitProfile.png';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      image: instructorProfile1,
      backgroundImage: instructor1Bg, 
    },
    {
      id: 2,
   
      image: instructorProfile2,
      backgroundImage: instructor2Bg, 
    },
    {
      id: 3,
      image: instructorProfile3,
      backgroundImage: instructor3Bg, 
    },
    {
      id: 4,
      image: instructorProfile4,
      backgroundImage: instructor4Bg, 
    },
  ];

  return (
    <div className="instructors-section">
      <h1>Our Instructors</h1>
      <div className="instructors-list">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;