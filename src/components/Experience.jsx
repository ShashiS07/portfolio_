import React from "react";

function Experience() {
  return (
    <section id="experience" className="experience-section fade-in">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Full Stack Developer</h3>
              <div className="company-info">
                <span className="company-name">Koolmind Technolab LLP</span>
                <span className="duration">Sept 2023 – Present</span>
              </div>
              <span className="location">Ahmedabad, India</span>
            </div>
            
            <ul className="responsibilities">
              <li>Developed scalable RESTful APIs using Node.js and Express.js for E-commerce, Chat/Calling, and LMS platforms.</li>
              <li>Designed MongoDB schemas and optimized queries, improving backend performance and scalability.</li>
              <li>Implemented JWT authentication and role-based authorization for secure API access.</li>
              <li>Built microservices and integrated real-time features using Socket.IO and Agora.</li>
              <li>Integrated Firebase, payment gateways, and deployed applications on AWS (EC2, S3).</li>
              <li>Collaborated in Agile teams to deliver full-stack features using React.js, MUI, and Tailwind CSS.</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Backend Developer Trainee</h3>
              <div className="company-info">
                <span className="company-name">Function Up</span>
                <span className="duration">Oct 2022 – Mar 2023</span>
              </div>
              <span className="location">Remote</span>
            </div>
            
            <ul className="responsibilities">
              <li>Built RESTful APIs using Node.js and Express.js following MVC architecture.</li>
              <li>Designed MongoDB schemas and implemented CRUD operations for scalable data handling.</li>
              <li>Implemented JWT authentication, authorization, and secure API routing.</li>
              <li>Developed validation, error handling, and modular backend logic.</li>
              <li>Tested and documented APIs using Postman.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
