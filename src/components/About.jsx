import React from "react";
import javascriptIcon from "../assets/Icons/javascript.svg";
import reactIcon from "../assets/Icons/react.svg";
import reduxIcon from "../assets/Icons/redux.svg";
import htmlIcon from "../assets/Icons/html.svg";
import cssIcon from "../assets/Icons/css.svg";
import materialIcon from "../assets/Icons/material.svg";
import nodeIcon from "../assets/Icons/node.svg";
import expressIcon from "../assets/Icons/express.svg";
import mongodbIcon from "../assets/Icons/mongodb.svg";
import gitIcon from "../assets/Icons/git.svg";
import githubIcon from "../assets/Icons/github.svg";
import nextIcon from "../assets/Icons/next.svg";
import typescriptIcon from "../assets/Icons/typescript.svg";
import tailwindIcon from "../assets/Icons/tailwindcss.svg";
import postgresqlIcon from "../assets/Icons/postgresql.svg";
import mysqlIcon from "../assets/Icons/mysql.svg";
import jwtIcon from "../assets/Icons/jwt.svg";
import awsIcon from "../assets/Icons/aws.svg";
import firebaseIcon from "../assets/Icons/firebase.svg";
import postmanIcon from "../assets/Icons/postman.svg";
import socketIcon from "../assets/Icons/socket.svg";
import dockerIcon from "../assets/Icons/docker.svg";
import openaiIcon from "../assets/Icons/openai.svg";
import claudeIcon from "../assets/Icons/claude.svg";
import cursorIcon from "../assets/Icons/cursor.svg";
import redisIcon from "../assets/Icons/redis.svg";
import apiIcon from "../assets/Icons/api.svg";
import paymentIcon from "../assets/Icons/payment.svg";
import microservicesIcon from "../assets/Icons/microservices.png";

function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Passionate Full Stack Developer with a proven track record of delivering production-ready applications. I specialize in transforming business requirements into scalable technical solutions, having successfully built real-time communication systems, e-commerce platforms, and enterprise applications. My expertise in microservices architecture and secure API design has enabled businesses to achieve seamless user experiences and robust performance. I thrive on solving complex challenges and am committed to writing clean, maintainable code that drives measurable business results.
        </p>

        <h3 className="skills-title">Skills</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <img src={javascriptIcon} alt="JavaScript" className="skill-icon-svg" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <img src={typescriptIcon} alt="TypeScript" className="skill-icon-svg" />
            <span>TypeScript</span>
          </div>
          <div className="skill-item">
            <img src={reactIcon} alt="React.js" className="skill-icon-svg" />
            <span>React.js</span>
          </div>
          <div className="skill-item">
            <img src={nextIcon} alt="Next.js" className="skill-icon-svg" />
            <span>Next.js</span>
          </div>
          <div className="skill-item">
            <img src={reduxIcon} alt="Redux" className="skill-icon-svg" />
            <span>Redux</span>
          </div>
          <div className="skill-item">
            <img src={htmlIcon} alt="HTML5" className="skill-icon-svg" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <img src={cssIcon} alt="CSS3" className="skill-icon-svg" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
           <img src={tailwindIcon} alt="Tailwind CSS" className="skill-icon-svg" />
            <span>Tailwind CSS</span>
          </div>
          <div className="skill-item">
            <img src={materialIcon} alt="MUI" className="skill-icon-svg" />
            <span>MUI</span>
          </div>
          <div className="skill-item">
            <img src={nodeIcon} alt="Node.js" className="skill-icon-svg" />
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <img src={expressIcon} alt="Express.js" className="skill-icon-svg" />
            <span>Express.js</span>
          </div>
          <div className="skill-item">
            <img src={apiIcon} alt="REST APIs" className="skill-icon-svg" />
            <span>REST APIs</span>
          </div>
          <div className="skill-item">
             <img src={microservicesIcon} alt="Microservices" className="skill-icon-svg" />
            <span>Microservices</span>
          </div>
          <div className="skill-item">
            <img src={mongodbIcon} alt="MongoDB" className="skill-icon-svg" />
            <span>MongoDB</span>
          </div>
          <div className="skill-item">
            <img src={mysqlIcon} alt="MySQL" className="skill-icon-svg" />
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <img src={redisIcon} alt="Redis" className="skill-icon-svg" />
            <span>Redis</span>
          </div>
          <div className="skill-item">
            <img src={postgresqlIcon} alt="PostgreSQL" className="skill-icon-svg" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill-item">
            <img src={jwtIcon} alt="JWT" className="skill-icon-svg" />
            <span>JWT</span>
          </div>
          <div className="skill-item">
            <img src={awsIcon} alt="AWS" className="skill-icon-svg" />
            <span>AWS (EC2, S3, SES, IVS)</span>
          </div>
          <div className="skill-item">
            <img src={dockerIcon} alt="Docker" className="skill-icon-svg" />
            <span>Docker</span>
          </div>
          <div className="skill-item">
            <img src={gitIcon} alt="Git" className="skill-icon-svg" />
            <span>Git</span>
          </div>
          <div className="skill-item">
            <img src={githubIcon} alt="GitHub" className="skill-icon-svg" />
            <span>GitHub</span>
          </div>
          <div className="skill-item">
            <img src={postmanIcon} alt="Postman" className="skill-icon-svg" />
            <span>Postman</span>
          </div>
          <div className="skill-item">
            <img src={firebaseIcon} alt="Firebase" className="skill-icon-svg" />
            <span>Firebase</span>
          </div>
          <div className="skill-item">
            <img src={socketIcon} alt="Socket.IO" className="skill-icon-svg" />
            <span>Socket.IO</span>
          </div>
          <div className="skill-item">
            <img src={paymentIcon} alt="Payment Gateway" className="skill-icon-svg" />
            <span>Payment Gateway</span>
          </div>
          <div className="skill-item">  
            <img src={openaiIcon} alt="OpenAI" className="skill-icon-svg" />
            <span>ChatGPT</span>
          </div>
          <div className="skill-item">
            <img src={cursorIcon} alt="Cursor" className="skill-icon-svg" />
            <span>Cursor</span>
          </div>
          <div className="skill-item">
            <img src={claudeIcon} alt="Claude" className="skill-icon-svg" />
            <span>Claude</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
