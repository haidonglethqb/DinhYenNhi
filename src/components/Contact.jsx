import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm actively seeking opportunities in accounting and finance. 
              Feel free to reach out if you'd like to discuss potential opportunities 
              or if you have any questions.
            </p>

            <div className="contact-methods">
              <a href="mailto:yennhii22812004@gmail.com" className="contact-method">
                <div className="method-icon email">
                  <FaEnvelope />
                </div>
                <div className="method-info">
                  <span className="method-label">Email</span>
                  <span className="method-value">yennhii22812004@gmail.com</span>
                </div>
              </a>

              <a href="tel:0703851188" className="contact-method">
                <div className="method-icon phone">
                  <FaPhone />
                </div>
                <div className="method-info">
                  <span className="method-label">Phone</span>
                  <span className="method-value">0703 851 188</span>
                </div>
              </a>

              <div className="contact-method">
                <div className="method-icon location">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-info">
                  <span className="method-label">Location</span>
                  <span className="method-value">An Khanh, Hanoi</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link github" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <div className="cta-icon">📧</div>
              <h4>Ready to Start?</h4>
              <p>
                I'm enthusiastic about bringing my accounting knowledge, 
                analytical skills, and dedication to your team.
              </p>
              <a href="mailto:yennhii22812004@gmail.com" className="cta-button">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Dinh Thi Yen Nhi. All rights reserved.</p>
          <p className="footer-tagline">Building a future in Finance & Accounting</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
