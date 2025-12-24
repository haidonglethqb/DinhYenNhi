import React from 'react';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-content">
          <div className="education-card">
            <div className="card-header">
              <div className="university-logo-container">
                <img src="/APD.jpg" alt="Academy of Policy and Development" className="university-logo" />
              </div>
              <div className="gpa-badge">
                <FaStar className="star-icon" />
                <div className="gpa-info">
                  <span className="gpa-label">Cumulative GPA</span>
                  <span className="gpa-value">3.77/4.0</span>
                  <span className="gpa-grade">Excellent</span>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3>Academy of Policy and Development (APD)</h3>
              <h4>Finance</h4>
              <span className="education-period">Nov 2022 - Jan 2026</span>
              
              <div className="education-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎓</div>
                  <div className="highlight-text">
                    <strong>Outstanding Academic Performance</strong>
                    <p>Consistently maintaining excellent grades throughout the program</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📊</div>
                  <div className="highlight-text">
                    <strong>Finance Specialization</strong>
                    <p>Focused on accounting principles, financial analysis, and corporate finance</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <div className="highlight-text">
                    <strong>Academic Recognition</strong>
                    <p>Awarded scholarships for 3 consecutive semesters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
