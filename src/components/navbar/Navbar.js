import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {
    const logo = require(`./assets/images/elevatelogoWhiteFinal.png`);

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close the menu on mobile after clicking
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logoAnchor">
                    <img
                        src={logo}
                        alt="Elevate Logo"
                        className="logo"
                    />
                </a>
            </div>
            <div className="navbar-right">
                {/* <ul className="nav-links" > */}
                <ul className={`nav-links ${menuOpen ? "show" : ""}`} >
                    <li>
                    <button onClick={() => scrollToSection("courses")}>Courses</button>
                    </li>
                    <li>
                    <button onClick={() => scrollToSection("aboutUs")}>About Us</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contact")}>Contact</button>
                    </li>
                </ul>
                {/* Hamburger button for smaller screens */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;