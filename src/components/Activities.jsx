import React from 'react';
import { FaUsers, FaPalette, FaCalendarAlt } from 'react-icons/fa';
import './Activities.css';

const Activities = () => {
  return (
    <section id="activities" className="section activities">
      <div className="container">
        <h2 className="section-title">Leadership & Activities</h2>
        
        <div className="activity-main">
          <div className="activity-card">
            <div className="activity-header">
              <div className="activity-icon">
                <FaUsers />
              </div>
              <div className="activity-period">
                <FaCalendarAlt /> 2023 - Present
              </div>
            </div>

            <div className="activity-content">
              <h3>Youth Union of Finance & Banking Faculty</h3>
              <div className="activity-roles">
                <span className="role-badge primary">Executive Committee Member</span>
                <span className="role-badge secondary">Head of Arts Department</span>
              </div>

              <div className="activity-details">
                <div className="detail-item">
                  <FaPalette className="detail-icon" />
                  <div>
                    <h4>Department Leadership</h4>
                    <p>Organized faculty events and managed budget for the Arts Department</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <div>
                    <h4>Event Management</h4>
                    <p>Coordinated cultural and artistic activities for the faculty</p>
                  </div>
                </div>
              </div>

              <div className="activity-achievement">
                <div className="achievement-badge">
                  <div className="badge-star">★</div>
                  <div className="achievement-text">
                    <strong>Outstanding Student Contribution</strong>
                    <span>2 consecutive years (2023, 2024)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="leadership-qualities">
          <h3>Leadership Qualities Demonstrated</h3>
          <div className="qualities-grid">
            <div className="quality-item">
              <div className="quality-number">01</div>
              <h4>Team Management</h4>
              <p>Leading the Arts Department team effectively</p>
            </div>
            <div className="quality-item">
              <div className="quality-number">02</div>
              <h4>Budget Management</h4>
              <p>Responsible financial planning and execution</p>
            </div>
            <div className="quality-item">
              <div className="quality-number">03</div>
              <h4>Event Organization</h4>
              <p>Successfully coordinating faculty-wide events</p>
            </div>
            <div className="quality-item">
              <div className="quality-number">04</div>
              <h4>Consistent Excellence</h4>
              <p>Recognized for outstanding contribution 2 years in a row</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
