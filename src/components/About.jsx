import React from 'react';
// import './About.css'; // Optional: For custom styling

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Learn more about our mission, vision, and values.</p>
      </div>
      <div className="about-content">
        <p>
          We are a company dedicated to providing the best products and services to our customers.
          Our journey began in [Year], and since then, we have been committed to innovation,
          quality, and customer satisfaction. Our team works tirelessly to ensure that we
          meet the needs of our clients and exceed their expectations.
        </p>
        <ul className="about-values">
          <li><strong>Integrity:</strong> We believe in doing the right thing, always.</li>
          <li><strong>Innovation:</strong> We strive to stay ahead of the curve by constantly evolving.</li>
          <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
          <li><strong>Excellence:</strong> We are committed to delivering exceptional results.</li>
        </ul>
      </div>
    </section>
  )
}

export default About;
