import React from 'react';
import { FaTrophy, FaStar, FaAward } from 'react-icons/fa';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      title: 'Outstanding Student of Finance & Banking Faculty',
      year: '2025',
      icon: <FaTrophy />,
      color: '#FFD700',
      type: 'Excellence Award'
    },
    {
      title: 'Certificate of Merit - Party Awareness Training Course',
      subtitle: 'Excellent Grade',
      year: '2024',
      icon: <FaAward />,
      color: '#0066cc',
      type: 'Academic Achievement'
    },
    {
      title: 'Academic Encouragement Scholarship',
      subtitle: '3 Consecutive Semesters',
      year: '2024',
      icon: <FaStar />,
      color: '#00a8ff',
      type: 'Scholarship'
    }
  ];

  return (
    <section id="awards" className="section awards">
      <div className="container">
        <h2 className="section-title">Honors & Awards</h2>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="award-card"
              style={{'--award-color': award.color}}
            >
              <div className="award-header">
                <div className="award-type">{award.type}</div>
                <div className="award-year">{award.year}</div>
              </div>

              <div className="award-icon-container">
                <div className="award-icon" style={{color: award.color}}>
                  {award.icon}
                </div>
                <div className="icon-glow" style={{background: `radial-gradient(circle, ${award.color}40, transparent)`}}></div>
              </div>

              <div className="award-content">
                <h3>{award.title}</h3>
                {award.subtitle && <h4>{award.subtitle}</h4>}
              </div>

              <div className="award-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-star">★</div>
                <div className="decoration-line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <div className="summary-icon">🏆</div>
            <div className="summary-content">
              <h4>Outstanding Contribution</h4>
              <p>2 consecutive years (2023, 2024)</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📚</div>
            <div className="summary-content">
              <h4>Consistent Excellence</h4>
              <p>Multiple academic achievements</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⭐</div>
            <div className="summary-content">
              <h4>Leadership Recognition</h4>
              <p>Executive committee member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
