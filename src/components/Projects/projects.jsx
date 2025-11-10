
import './Projects.css'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'

const projects = [
  {
    title: 'Edutechprojects – Student Dashboard',
    description:
      ' A modern, responsive student dashboard built with React and Vite for seamless academic management. Features include course management, assignments, class scheduling, real-time updates, and a user-friendly login (testable with any random credentials). This live project demonstrates frontend skills, API integration, and full-stack deployment. Explore the code and experience the live demo below.',
    tags: ['React', 'Vite', 'Frontend', 'Dashboard'],
    github: 'https://github.com/Venukanna/Edutechprojects',
    live: 'https://edutechprojects.vercel.app/',
    image: "/edutechprojects.png",
  },
  {
  title: 'NCR Healthy Energy – Nutrition E-Commerce',
  description:
    'A modern, user-focused nutrition e-commerce platform built with React and Vite. NCR Healthy Energy features premium natural protein bars and supplements for active lifestyles. The project showcases an interactive product catalog, real-time cart, secure checkout, customer testimonials, and expert nutrition guidance. Explore natural ingredients, sustainable practices, and seamless mobile-first UI. This live project demonstrates frontend skills, e-commerce flows, API integration, and full-stack deployment. Try the demo and review the code below.',
  tags: ['React', 'Vite', 'Frontend', 'E-Commerce', 'Nutrition'],
  github: 'https://github.com/Venukanna/Ncrfood',
  live: 'https://ncrfood.vercel.app/',
  image: '/ncrfood.png',
},

  {
    title: 'Online Compiler with Test Case Support',
    description:
      'A real-time, web-based code editor and compiler supporting multiple languages (Java, C, C++, Python, JavaScript, and more). Users can write code, add custom input and multiple test cases, and instantly see output. Features include a syntax-highlighting editor (CodeMirror), secure Docker-based backend (Java Spring Boot), and REST API integration for result rendering. The full project code is available on GitHub, with a live site to try all features.',
    tags: ['React', 'CodeMirror', 'Docker', 'Spring Boot'],
    github: 'https://github.com/Venukanna/onlinecompilertestcasefrontend',
    live: 'https://onlinecompilertestcasefrontend.vercel.app/',
    image: '/online-compiler.png',
  },
  {
    title: 'Earthquake Visualizer',
    description:
      'An interactive web app that visualizes recent worldwide earthquake data using live USGS feeds. Features include an interactive map (React-Leaflet), real-time filtering by magnitude and time range, marker popups with quake details, country/region search, and timeline chart visualization. Built with React and Vite, fully open-source, live demo available for exploration!...',
    tags: ['React', 'Vite', 'Leaflet', 'Visualization'],
    github: 'https://github.com/Venukanna/Earthquake-Visualizer',
    live: 'https://earthquake-visualizerr.netlify.app/',
    image: 'earthquake-visualizer.jpg',
  },
  {
    title: 'HRMS Dashboard',
    description:
      'A full-featured Human Resource Management System (HRMS) built with React and Vite. Supports attendance tracking, leave, payroll, and employee directory. Users can log in as either Admin (admin/admin123) or Employee (employee/employee123) to explore dedicated dashboards for HR management and employee functions. Entire code is publicly available, and live demo is ready for instant trial...',
    tags: ['React', 'Vite', 'Dashboard', 'HRMS'],
    github: 'https://github.com/Venukanna/Hrmsfrontend',
    live: 'https://hrmsfrontend-1ko7.vercel.app/',
    image: 'hrms-dashboard-demo.jpg',
  },
  {
    title: 'Beanmeup',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track...',
    tags: ['React', 'Node.js', 'Spotify API'],
    github: 'https://github.com/Venukanna/Beanmeup.git',
    live: 'https://venukanna.github.io/Beanmeup/',
    image: 'project1.jpg',
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2 className="section-title">Some Things I've Built</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== POPUP MODAL ===== */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <div className="modal-buttons">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
