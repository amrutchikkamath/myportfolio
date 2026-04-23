import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Academic Projects</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Built scalable backend systems using Spring Boot and developed
              full-stack applications with database integration for practical,
              real-world use cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>API & Backend Engineering</h4>
                <h5>Project-Based Experience</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and implemented REST APIs with Spring Data JPA and
              MySQL, focusing on clean architecture, modular design, and
              maintainable services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Current Focus</h4>
                <h5>Cloud, DevOps & AI/ML</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working with Git, Maven, Jenkins, AWS, and Azure DevOps while
              building AI/ML-backed applications using Python tools and modern
              API-first development practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
