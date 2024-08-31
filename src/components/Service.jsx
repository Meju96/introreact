import React from 'react';
// import './Service.css'; // Optional: For custom styling

const Service = () => {
  return (
    <section className="service-section">
      <div className="service-header">
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </div>
      <div className="service-list">
        <div className="service-item">
          <h3>Service 1</h3>
          <p>Detail about service 1. Describe what this service entails.</p>
        </div>
        <div className="service-item">
          <h3>Service 2</h3>
          <p>Detail about service 2. Describe what this service entails.</p>
        </div>
        <div className="service-item">
          <h3>Service 3</h3>
          <p>Detail about service 3. Describe what this service entails.</p>
        </div>
      </div>
    </section>
  )
}

export default Service;
