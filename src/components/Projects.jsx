import { motion } from "framer-motion";
import aiReviewer from '../assets/projects/ai-reviewer.png';
import communityCompass from '../assets/projects/Community-compass.png';
import atlasCountries from '../assets/projects/atlas-countries.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Projects = () => {
  const projects = [
    {
      image: aiReviewer,
      title: "AI-Code-Reviewer",
      description: "A React app which reviews the input code",
      tech: ["React", "JS", "AI API"],
      link: "https://github.com/AayushSrivastava444/Ai-Code-Reviewer",
    },
    {
      image: communityCompass,
      title: "Community Compass",
      description: "A JS app for uploading lost and found items.",
      tech: ["React", "JS", "Mongodb"],
      link: "https://github.com/AayushSrivastava444/Community-Compass",
    },
    {
      image: atlasCountries,
      title: "Atlas Countries",
      description: "A simple react app which tells information about all 195 countries.",
      tech: ["React", "CSS", "API"],
      link: "https://github.com/AayushSrivastava444/Atlas-Countries",
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
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
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
