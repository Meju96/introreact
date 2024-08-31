import React from 'react';
// import './Contact.css'; // Optional: For custom styling

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
      </div>
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-details">
          <h3>Our Contact Information</h3>
          <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@company.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
