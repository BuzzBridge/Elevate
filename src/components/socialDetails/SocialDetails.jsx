import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Import Instagram icon
import './SocialDetails.css';

const SocialDetails = () => {
    const addressLineOne = "Sector 4, Channi Himmat, Jammu,";
    const addressLineTwo = "Jammu & Kashmir";
    const mobileDecorated = "+91 87160 56748";
    const mobile = mobileDecorated.replaceAll(' ', '');
    const emailAddress = "admin@elevatecreativesolutions.com";
    const instaProfile = "https://www.instagram.com/elevatecreativeacademy";

    return (
        <div className='social-details-div' id='contact'>
            <h1 className='social-details-title'>Let's connect</h1>
            <div className='social-details-mobile' >
                <div>
                    <p>
                        <strong>Address:<br /></strong>
                        {addressLineOne} <br /> {addressLineTwo}
                    </p>
                    <p>
                        <strong>Phone | Whatsapp:<br /></strong>
                        <a href={`tel:${mobile}`}>{mobileDecorated}</a>
                    </p>
                    <p>
                        <strong>Email:<br /></strong>
                        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                    </p>
                </div>
                <div className='social-links'>
                    <a href={instaProfile} target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <FaInstagram size={40} />
                    </a>
                    <a href={instaProfile} target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <FaFacebook size={40} />
                    </a>
                </div>
            </div>

        </div>
    )
};

export default SocialDetails;