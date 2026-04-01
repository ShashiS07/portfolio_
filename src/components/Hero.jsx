import React from "react";
import myPhoto from "../assets/shashi_photo.png";

function Hero() {
  return (
    <section id="hero" className="hero fade-in">
      <div className="container hero-content">
        <div className="hero-text">
          <img src={myPhoto} alt="Shashi Shekhar Singh" className="profile-pic" />
          <h2>
            Hello, I’m <span className="highlight">Shashi Shekhar Singh</span>
          </h2>

          <h3>MERN Stack Developer</h3>
          <p>
            Full Stack Developer with 3 years of experience in MERN stack, specializing in backend development using Node.js, Express.js, and MongoDB. Skilled in building scalable REST APIs, microservices, and secure authentication (JWT), with hands-on experience in AWS deployment. Proficient in React.js, MUI, and Tailwind CSS for developing responsive, end-to-end web applications.
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
