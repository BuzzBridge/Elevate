import React from "react";
import './Hero.css';

const Hero = () => {
    const mobileGif = require(`./assets/gif/heroMobileBackground.gif`);
    const webVideo = require(`./assets/videos/heroWebBackground.mp4`);

    return (
        <div className='hero-section'>
            <div className='hero-section-web' >
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline /* Prevents iOS fullscreen mode */
                >
                    <source src={webVideo} type="video/mp4" />
                </video>

            </div>
            <div className='hero-section-mobile'>
                <img
                    className="hero-video hero-video-small"
                    src={mobileGif}
                    alt="Hero GIF"
                />
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