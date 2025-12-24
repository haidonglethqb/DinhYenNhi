import React from 'react';
import { 
  FaFileExcel, 
  FaLanguage, 
  FaFileWord, 
  FaChartBar,
  FaCalculator,
  FaSearch
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Microsoft Excel',
      level: 'Advanced',
      icon: <FaFileExcel />,
      color: '#217346',
      skills: [
        'Pivot Tables',
        'VLOOKUP & HLOOKUP',
        'Conditional Functions (IF, SUMIF)',
        'Data Analysis & Visualization',
        'MOS Certified (Score 900+)'
      ]
    },
    {
      title: 'Languages',
      level: 'Intermediate',
      icon: <FaLanguage />,
      color: '#0066cc',
      skills: [
        'English (Intermediate Reading)',
        'VSTEP Certificate',
        'Business Communication'
      ]
    },
    {
      title: 'Microsoft Office',
      level: 'Proficient',
      icon: <FaFileWord />,
      color: '#2B579A',
      skills: [
        'MS Word (Drafting)',
        'PowerPoint (Presentations)',
        'MOS Specialist Certified'
      ]
    },
    {
      title: 'Financial Skills',
      level: 'Advanced',
      icon: <FaChartBar />,
      color: '#00a8ff',
      skills: [
        'Financial Statement Analysis',
        'Credit Risk Assessment',
        'Accounting Principles',
        'Data Standardization'
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Professional Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{'--card-color': category.color}}
            >
              <div className="skill-card-header">
                <div className="skill-icon" style={{background: category.color}}>
                  {category.icon}
                </div>
                <div className="skill-info">
                  <h3>{category.title}</h3>
                  <span className="skill-level" style={{color: category.color}}>
                    {category.level}
                  </span>
                </div>
              </div>

              <div className="skill-card-body">
                <ul className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>
                      <span className="skill-bullet" style={{background: category.color}}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skill-card-footer">
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{
                      background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                      width: category.level === 'Advanced' ? '95%' : 
                             category.level === 'Proficient' ? '85%' : '75%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="core-competencies">
          <h3>Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-item">
              <FaCalculator className="competency-icon" />
              <span>Logical Thinking with Data</span>
            </div>
            <div className="competency-item">
              <FaSearch className="competency-icon" />
              <span>Attention to Detail</span>
            </div>
            <div className="competency-item">
              <FaChartBar className="competency-icon" />
              <span>Analytical Skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
