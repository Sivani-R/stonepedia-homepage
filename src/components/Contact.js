import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="form-container">
        <h2>Get In Touch</h2>
        <p>
          We’d love to hear from you! Please fill out the form below, and we’ll
          get back to you shortly.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
