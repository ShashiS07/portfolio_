import React from "react";

const projects = [
  {
    title: "Digital Doorbells",
    description: "Developed a backend enabling real-time visitor communication using Node.js, Socket.IO, and Agora (audio/video calling). Built secure REST APIs, implemented JWT authentication, integrated Razorpay payments, and optimized MongoDB schemas. Deployed on AWS (EC2, S3) and contributed to React.js admin dashboard development.",
    tech: "Node.js, Express.js, MongoDB, Socket.IO, Agora, AWS, React.js",
    github: "#",
    live: "https://digibellstechnologies.com/"
  },
  {
    title: "Healthcare E-commerce Platform",
    description: "Designed and developed REST APIs for product, cart, and order management using Node.js and Express.js. Implemented end-to-end e-commerce logic including cart lifecycle, stock handling, and custom payment processing. Built secure authentication, MongoDB schemas, and integrated backend with React.js admin dashboard.",
    tech: "Node.js, Express.js, MongoDB, React.js, AWS",
    github: "#",
    live: "https://crownhtz.com/login"
  },
  {
    title: "Chat Application (V-CONNECT ELEVATE)",
    description: "Developed backend for real-time chat and calling using Node.js and Socket.IO with JWT-based authentication. Designed MongoDB schemas and integrated Firebase for push notifications and real-time alerts. Built React.js frontend and admin panel for user and content management.",
    tech: "Node.js, Express.js, MongoDB, Socket.IO, Firebase, React.js",
    github: "#",
    live: "#"
  },
  {
    title: "Kharedo Live",
    description: "Worked as a Backend Developer and managed the Admin Portal for Kharedo Live, a live commerce platform that combines video streaming and e-commerce. Built scalable APIs with Node.js and Express.js, implemented real-time features with Socket.IO, and integrated AWS IVS for live streaming, allowing sellers to showcase products and buyers to purchase directly during streams. Managed admin functionalities for users, products, orders, and content.",
    tech: "Node.js, Express.js, MongoDB, Socket.IO, Firebase, React.js, AWS-IVS, AWS-S3, AWS-EC2",
    github: "#",
    live: "#"
  },
  {
    title: "ID Card Management System (Khatri ID Card)",
    description: "Developed a scalable identity card management platform with a backend and admin portal for efficient data collection and printing. Built secure APIs with Node.js and Express.js, designed MongoDB schemas, integrated AWS services, and developed a React.js dashboard for managing institutions and users.",
    tech: "Node.js, Express.js, MongoDB, Firebase, React.js, AWS-S3, AWS-EC2",
    github: "#",
    live: "#"
  },
  {
    title: "Education Platform (Aceme6)",
    description: "Developed a MERN-based study platform for students with a robust backend, RESTful APIs, and an admin portal for efficient user and content management. Built scalable backend services with Node.js and MongoDB, and developed the React.js frontend with Redux Toolkit for optimized state management and a seamless learning experience.",
    tech: "Node.js, Express.js, MongoDB, Firebase, React.js, AWS-S3, AWS-EC2",
    github: "#",
    live: "https://aceme6.com/"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h3>{proj.title}</h3>
              <div className="project-tech">{proj.tech}</div>
              <p>{proj.description}</p>
              <div className="project-links">
                {proj.github !== "#" && (
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {proj.live !== "#" && (
                  <a href={proj.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
