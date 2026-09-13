
import "./Projects.css";

const projects = [
  {
    title: "Airbnb Clone",
    description:
      "A full-stack property rental platform where users can explore, create and manage property listings.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "public/Airbnb-1.jpg",
    github: "https://github.com/abdul8810/wonderlust",
    live: "https://wonderlust-h4xz.onrender.com/",
  },
  {
    title: "Portfolio",
    description:
      "A full-stack blogging application with user authentication, creating posts and managing content.",
    technologies: ["HTML","CSS","Java-Script","React"],
    image: "public/port.jpg",
    github: "https://github.com/abdul8810/My_Portfolio",
    live: "#",
  },

];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>MY WORK</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;