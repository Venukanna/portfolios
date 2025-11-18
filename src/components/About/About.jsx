

// // export default About
// import './About.css'
// import { motion } from 'framer-motion'
// import profileImage from '../../public/profile.jpg'

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <div className="about-container">
//         {/* Profile Image + Resume Buttons */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="about-image"
//         >
//           <div className="image-wrapper">
//             <img src={profileImage} alt="Profile" />
//           </div>

//           <div className="resume-buttons">
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               View Resume
//             </a>

//             <a
//               href="/resume.pdf"
//               download="VenuBabu_Resume.pdf"
//             >
//               📄 Download Resume
//             </a>
//           </div>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="about-content"
//         >
//           <h2 className="section-title">About Me</h2>

//           <p>
//             Hi! I'm <strong>Venu Babu Banala</strong>, an entry-level
//             <strong> Software Engineer</strong> and passionate
//             <strong> Java Full Stack Developer</strong> based in Hyderabad.
//             I have a strong foundation in <strong>Core Java, Spring Boot, Hibernate,</strong> and
//             <strong> MySQL</strong>, with hands-on experience in developing scalable,
//             efficient web applications.
//           </p>

//           <p>
//             I completed my <strong>Bachelor’s Degree in Statistics</strong> from
//             Kakatiya University (2020–2023) and have successfully completed
//             <strong> Full Stack Java Development</strong> training from ExcelR Solutions.
//             During my internship at ExcelR, I contributed to building and optimizing
//             an e-commerce platform, enhancing UI/UX performance and backend efficiency.
//           </p>

//           <p>
//             I enjoy working on both <strong>frontend and backend development</strong>,
//             integrating APIs, and deploying projects with modern technologies like
//             <strong> React.js, Spring Boot, and Docker.</strong> I’m passionate about
//             learning new frameworks and building real-world applications that make
//             an impact.
//           </p>

//           <p>
//             Some of the technologies and tools I frequently work with include:
//           </p>

//           <ul className="skills-list">
//             <li>Java & Spring Boot</li>
//             <li>React.js & HTML5/CSS3</li>
//             <li>Hibernate & MySQL</li>
//             <li>MongoDB</li>
//             <li>Docker & AWS</li>
//             <li>Git & Vite</li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default About





// export default About
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Profile Image + Resume Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <div className="image-wrapper">
            {/* ✅ Public file, so use direct path */}
            <img src="/profile.jpg" alt="Profile" />
          </div>

          <div className="resume-buttons">
            <a
              href="/Resumeee.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>

            <a
              href="/Resumeee.pdf"
              download="VenuBabu_Resume.pdf"
            >
              📄 Download Resume
            </a>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>

          <p>
            Hi! I'm <strong>Venu Babu Banala</strong>, an entry-level
            <strong> Software Engineer</strong> and passionate
            <strong> Java Full Stack Developer</strong> based in Hyderabad.
            I have a strong foundation in <strong>Core Java, Spring Boot, Hibernate,</strong> and
            <strong> MySQL</strong>, with hands-on experience in developing scalable,
            efficient web applications.
          </p>

          <p>
            I completed my <strong>Bachelor’s Degree </strong> from
            Kakatiya University  and have successfully completed
            <strong> Full Stack Java Development</strong> training from ExcelR Solutions.
            During my internship at ExcelR, I contributed to building and optimizing
            an e-commerce platform, enhancing UI/UX performance and backend efficiency.
          </p>

          <p>
            I enjoy working on both <strong>frontend and backend development</strong>,
            integrating APIs, and deploying projects with modern technologies like
            <strong> React.js, Spring Boot, and Docker.</strong> I’m passionate about
            learning new frameworks and building real-world applications that make
            an impact.
          </p>

          <p>
            Some of the technologies and tools I frequently work with include:
          </p>

          <ul className="skills-list">
            <li>Java & Spring Boot</li>
            <li>React.js & HTML5/CSS3</li>
            <li>Hibernate & MySQL</li>
            <li>MongoDB</li>
            <li>Docker & AWS</li>
            <li>Git & Vite</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
