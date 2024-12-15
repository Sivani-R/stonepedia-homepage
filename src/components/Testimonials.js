import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p>"Stonepedia's quality is unmatched. Highly recommended!"</p>
          <h4>- John Doe</h4>
        </div>
        <div className="testimonial-card">
          <p>"Reliable and professional service. Will use again!"</p>
          <h4>- Jane Smith</h4>
        </div>
        <div className="testimonial-card">
          <p>"Exceptional selection of stones for all needs. Truly impressive!"</p>
          <h4>- Michael Lee</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

