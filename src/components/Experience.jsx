import React from 'react';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experience = {
    company: 'MB BANK - BA DINH BRANCH',
    position: 'SME Banking Intern',
    period: 'Aug 2025 - Nov 2025',
    responsibilities: [
      'Verified legal documents and financial records for 20+ SME clients',
      'Input and standardized client data on the internal system with high accuracy',
      'Analyzed Financial Statements (Balance Sheet, Income Statement) to assess credit risk'
    ]
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo-container">
                    <img src="/mb-bank.svg" alt="MB Bank" className="company-logo" />
                  </div>
                  <div className="experience-info">
                    <h3>{experience.position}</h3>
                    <h4>{experience.company}</h4>
                    <span className="period">{experience.period}</span>
                  </div>
                </div>
                
                <div className="experience-body">
                  <h5>Key Responsibilities & Achievements:</h5>
                  <ul className="responsibilities-list">
                    {experience.responsibilities.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-skills">
                  <span className="skill-tag">Financial Analysis</span>
                  <span className="skill-tag">Data Management</span>
                  <span className="skill-tag">Credit Risk Assessment</span>
                  <span className="skill-tag">SME Banking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
