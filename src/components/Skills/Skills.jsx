// import './Skills.css'
// import { motion } from 'framer-motion'

// const skills = [
//   { name: 'HTML', level: 90 },
//   { name: 'CSS', level: 85 },
//   { name: 'JavaScript', level: 80 },
//   { name: 'React.js', level: 85 },
//   { name: 'Node.js', level: 75 },
//   { name: 'Spring Boot', level: 70 },
//   { name: 'Java', level: 65 },
//   { name: 'Git', level: 80 },
// ]

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <div className="skills-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="skills-content"
//         >
//           <h2 className="section-title">My Skills</h2>
//           <p>
//             I've worked with a variety of technologies in the web development
//             world. Here are some of my core skills:
//           </p>

//           <div className="skills-grid">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="skill-item"
//               >
//                 <div className="skill-info">
//                   <span>{skill.name}</span>
//                   <span>{skill.level}%</span>
//                 </div>
//                 <div className="skill-bar">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="skill-progress"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Skills


import './Skills.css'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 55 },
      { name: 'JavaScript', level: 75 },
      { name: 'SQL', level: 75 },
      { name: 'C', level: 65 }
    ]
  },
  {
    title: 'Java Technologies',
    skills: [
      { name: 'Spring Boot', level: 75 },
      { name: 'Hibernate', level: 70 },
      { name: 'Microservices', level: 65 },
      { name: 'Spring Cloud', level: 60 },
      { name: 'Spring Security', level: 60 }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 75 }
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MySQL', level: 65 },
      { name: 'MongoDB', level: 65 },
      { name: 'AWS', level: 60 },
      { name: 'Docker', level: 55 },
      { name: 'Eureka', level: 50 }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="skills-content"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p>
            Strong foundation in full-stack development with expertise in Java, Spring Boot, 
            React.js, and database technologies. Continuously learning and expanding my skill set.
          </p>

          <div className="skills-categories">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="skill-category"
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="skill-item"
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="skill-progress"
                          style={{
                            background: `linear-gradient(90deg, #64ffda, ${skill.level > 70 ? '#4fd1c5' : skill.level > 50 ? '#4298a4' : '#366b83'})`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="additional-skills"
          >
            <h3 className="category-title">Tools & Methodologies</h3>
            <div className="skills-tags">
              {['vite','Git', 'Docker', 'AWS', 'Eureka', 'REST APIs', 'Microservices Architecture', 'Agile Methodology', 'Debugging', 'Performance Optimization'].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills