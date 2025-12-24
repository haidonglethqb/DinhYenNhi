import React from 'react';
import { FaCertificate, FaMedal } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'MOS Specialist',
      subtitle: 'Word & Excel',
      score: '900+',
      year: '2024',
      icon: <FaCertificate />,
      color: '#217346'
    },
    {
      title: 'VSTEP English Certificate',
      subtitle: 'English Proficiency',
      year: '2024',
      icon: <FaCertificate />,
      color: '#0066cc'
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="certification-card"
              style={{'--cert-color': cert.color}}
            >
              <div className="certification-badge">
                <div className="badge-icon" style={{background: cert.color}}>
                  {cert.icon}
                </div>
                <div className="badge-shine"></div>
              </div>

              <div className="certification-content">
                <h3>{cert.title}</h3>
                <h4>{cert.subtitle}</h4>
                {cert.score && (
                  <div className="certification-score" style={{background: cert.color}}>
                    Score: {cert.score}
                  </div>
                )}
                <span className="certification-year">{cert.year}</span>
              </div>

              <div className="certification-ribbon" style={{background: cert.color}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
