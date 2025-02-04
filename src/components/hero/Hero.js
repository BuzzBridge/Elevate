import React, { useEffect } from "react";
import './Hero.css';

const Hero = () => {
    // const mobileVideo = require(`./assets/videos/heroMobileBackground.mp4`);
    const mobileGif = require(`./assets/gif/heroMobileBackground.gif`);
    const webVideo = require(`./assets/videos/heroWebBackground.mp4`);

    useEffect(() => {
        const fixViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        fixViewportHeight();
        window.addEventListener("resize", fixViewportHeight);

        return () => window.removeEventListener("resize", fixViewportHeight);
    }, []);

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
                    src={mobileGif} // Replace `mobileVideo` with the path to your GIF
                    alt="Hero GIF"
                />
                {/* <video className="hero-video hero-video-small" autoPlay loop muted>
                    <source src={mobileVideo} type="video/mp4" />
                </video> */}
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