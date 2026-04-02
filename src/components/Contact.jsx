import React from "react";
import mailIcon from "../assets/Icons/gmail.svg";
import phoneIcon from "../assets/Icons/phone.svg";
import linkedinIcon from "../assets/Icons/linkedin.svg";

function Contact() {
  return (
    <section id="contact" className="contact-section fade-in">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          Ready to collaborate or have a question? I'm always excited to discuss
          new projects, innovative ideas, and opportunities to create impactful solutions.
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <img src={mailIcon} alt="Email" className="contact-icon" />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>shashiss0708@gmail.com</p>
              <a href="mailto:shashiss0708@gmail.com" className="contact-link">
                Send Message →
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+91 7379935535</p>
              <a href="tel:+917379935535" className="contact-link">
                Call Now →
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
            </div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <p>Shashi Shekhar Singh</p>
              <a 
                href="https://www.linkedin.com/in/shashi-shekhar-singh"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                View Profile →
              </a>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Let's Build Something Amazing Together</h3>
          <p>
            Whether you have a project in mind, need a skilled developer, or just want to connect - 
            I'm just a message away!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
