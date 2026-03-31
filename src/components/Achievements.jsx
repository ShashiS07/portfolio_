import React from "react";

function Achievements() {
  const achievements = [
    {
      title: "Best Employee of the Year – 2024",
      organization: "Koolmind Technolab LLP",
      description: "Recognized for outstanding technical contribution and project delivery.",
      hasCertificate: false
    },
    {
      title: "HackerRank Certified in Problem Solving",
      description: "Demonstrated strong algorithmic and logical problem-solving skills.",
      hasCertificate: true,
      certificateUrl: "https://www.hackerrank.com/certificates/fc5100c4e369"
    },
    {
      title: "HackerRank Certified in JavaScript",
      description: "Validated proficiency in ES6+, core JavaScript concepts, and backend fundamentals.",
      hasCertificate: true,
      certificateUrl: "https://www.hackerrank.com/certificates/f025661f05a8"
    }
  ];

  return (
    <section id="achievements" className="achievements-section fade-in">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              {achievement.organization && (
                <p className="organization">{achievement.organization}</p>
              )}
              <p>{achievement.description}</p>
              {achievement.hasCertificate && (
                <div className="project-links">
                  <a 
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
