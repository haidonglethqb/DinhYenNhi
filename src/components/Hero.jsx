import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <h3 className="hero-greeting">Hello, I'm</h3>
          <h1 className="hero-name">
            DINH THI YEN NHI
          </h1>
          <h2 className="hero-title">
            <span className="gradient-text">ACCOUNTING & FINANCE</span>
          </h2>
          <p className="hero-description">
            Senior Finance student | Outstanding GPA 3.77/4.0 | Future General Accountant
          </p>
          
          <div className="hero-contact">
            <a href="tel:0703851188" className="contact-item">
              <FaPhone /> <span>0703 851 188</span>
            </a>
            <a href="mailto:yennhii22812004@gmail.com" className="contact-item">
              <FaEnvelope /> <span>yennhii22812004@gmail.com</span>
            </a>
            <div className="contact-item">
              <FaMapMarkerAlt /> <span>An Khanh, Hanoi</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <div className="image-placeholder">
              <div className="profile-circle">
                <span className="profile-initial">YN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
