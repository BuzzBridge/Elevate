import React from 'react';
import './Hero.css';

const Hero = () => {
    const mobileVideo = require(`./assets/videos/heroMobileBackground.mp4`)
    const webVideo = require(`./assets/videos/heroWebBackground.mp4`)

    return (
        <div className='hero-section'>
            <div className='hero-section-web' >
                <video className="hero-video hero-video-large" autoPlay loop muted>
                    <source src={webVideo} type="video/mp4" />
                </video>
            </div>
            <div className='hero-section-mobile'>
                <video className="hero-video hero-video-small" autoPlay loop muted>
                    <source src={mobileVideo} type="video/mp4" />
                </video>
            </div>
            <button 
    className='enroll-button' 
    onClick={() => window.open("https://form.jotform.com/250181201079447", "_blank")}
>
    <strong>Enroll Now</strong>
</button>

        </div>
    );
};

export default Hero;