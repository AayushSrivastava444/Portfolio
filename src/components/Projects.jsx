import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Projects = () => {
  const projects = [
    {
      image: "/projects/atlas-countries.png",
      title: "Atlas Countries",
      description: "A React app showing country details with live API data.",
      tech: ["React", "Vite", "REST API"],
    },
    {
      image: "/projects/salesforce.png",
      title: "Salesforce Clone",
      description: "A simplified CRM clone built for learning purposes.",
      tech: ["React", "CSS", "Firebase"],
    },
    {
      image: "/projects/debttracker.png",
      title: "Debt Tracker",
      description: "Track debts and repayments with simple analytics.",
      tech: ["Node.js", "MongoDB", "Express"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            className="project-card"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            href="#"
          >
            <img
              src={import.meta.env.BASE_URL + project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};
