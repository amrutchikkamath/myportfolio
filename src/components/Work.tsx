import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Banking Management REST API",
    category: "Backend System",
    tools: "Java, Spring Boot, MySQL, Maven",
    image: "/WORK/BANKING%20MANAGEMENT%20API.png",
    link: "https://github.com/amrutchikkamath/Spring-Boot-Banking-API",
  },
  {
    title: "Hospital Management System",
    category: "Full-Stack Application",
    tools: "HTML, CSS, JavaScript, PHP, MySQL",
    image: "/WORK/HOSPITAL%20MANAGEMENT%20SYSTEM.png",
    link: "https://github.com/amrutchikkamath/Hospital-Management-System",
  },
  {
    title: "Cafe Management System",
    category: "Operations Automation",
    tools: "PHP, MySQL, XAMPP",
    image: "/WORK/CAFE%20MANAGEMENT%20SYSTEM.png",
    link: "https://github.com/amrutchikkamath/Cafe-Management-System",
  },
  {
    title: "Blockchain Crowdfunding Platform",
    category: "Decentralized Platform",
    tools: "Solidity, JavaScript, PHP, MySQL",
    image: "/WORK/BLOCKCHAIN%20CWORDFUNIG%20PLATFORM.png",
    link: "https://github.com/amrutchikkamath/Blockchain-Based-Crowd-Funding-Platform",
  },
  {
    title: "Portfolio Optimization (ML Project)",
    category: "Machine Learning",
    tools: "Python, NumPy, Pandas, Matplotlib",
    image: "/WORK/PORTFOLIO%20OPTIMIZATION.png",
    link: "https://github.com/amrutchikkamath/Portfolio_Optimization",
  },
  {
    title: "AI Copilot Assistant",
    category: "AI Backend System",
    tools: "Python, Flask, OpenAI API",
    image: "/WORK/AI%20COPILOT.png",
    link: "https://github.com/amrutchikkamath/AI-Copilot-Assistant-OpenAI-API-Python-Flask-",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
