import React from 'react';
import { FaBullseye, FaChartLine, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="objective-card main-objective">
            <div className="card-icon">
              <FaGraduationCap />
            </div>
            <h3>Objective</h3>
            <p>
              Senior Finance student with an outstanding GPA of <strong>3.77/4.0</strong>, 
              possessing strong logical thinking with data and a meticulous work attitude. 
              Seeking an <strong>Internship/Junior Accountant</strong> position to apply knowledge 
              of accounting principles, advanced Excel skills, and attention to detail in practical tasks.
            </p>
          </div>

          <div className="objective-grid">
            <div className="objective-card">
              <div className="card-icon">
                <FaBullseye />
              </div>
              <h4>Current Status</h4>
              <p>Senior Finance Student at Academy of Policy and Development</p>
              <div className="highlight">GPA: 3.77/4.0 (Excellent)</div>
            </div>

            <div className="objective-card">
              <div className="card-icon">
                <FaChartLine />
              </div>
              <h4>Career Goal</h4>
              <p>Become a highly skilled General Accountant within the next 3 years</p>
              <div className="highlight">Contributing value to financial operations</div>
            </div>
          </div>

          <div className="strengths">
            <h3>Key Strengths</h3>
            <div className="strengths-grid">
              <div className="strength-item">
                <div className="strength-number">01</div>
                <div className="strength-content">
                  <h4>Strong Analytical Skills</h4>
                  <p>Logical thinking with data and financial analysis</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-number">02</div>
                <div className="strength-content">
                  <h4>Meticulous Work Attitude</h4>
                  <p>Attention to detail in accounting tasks</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-number">03</div>
                <div className="strength-content">
                  <h4>Advanced Excel Proficiency</h4>
                  <p>MOS Certified with score 900+</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-number">04</div>
                <div className="strength-content">
                  <h4>Proven Track Record</h4>
                  <p>Outstanding academic performance and leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
