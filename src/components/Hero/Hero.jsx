
import './Hero.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Floating background elements */}
      <motion.div 
        className="floating-shape shape-1"
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ 
          x: 0,
          y: [0, 20, 0],
          opacity: 0.3,
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#64FFDA" d="M45.2,-58.2C58.1,-46.3,68,-30.5,70.9,-13.3C73.8,3.9,69.7,22.5,58.2,37.1C46.7,51.7,27.8,62.3,6.9,59.4C-14.1,56.5,-28,40.1,-40.2,24.5C-52.4,8.9,-62.8,-5.9,-61.3,-19.5C-59.8,-33.1,-46.3,-45.5,-31.4,-56.8C-16.5,-68.1,-0.3,-78.3,16.4,-76.5C33.2,-74.7,66.3,-60.9,77.3,-41.4C88.3,-21.9,77.1,3.3,65.9,25.6C54.7,47.9,43.5,67.3,27.8,74.5C12.1,81.7,-8.1,76.7,-25.2,67.3C-42.3,57.9,-56.3,44.1,-64.9,27.9C-73.5,11.7,-76.7,-6.9,-70.2,-21.9C-63.7,-36.9,-47.5,-48.4,-32.3,-59.5C-17.1,-70.6,-2.9,-81.3,12.4,-80.6C27.7,-79.9,55.4,-67.8,66.9,-50.1C78.4,-32.4,73.7,-9.1,66.9,10.2C60.1,29.5,51.1,45.8,37.8,56.8C24.5,67.9,6.9,73.7,-10.3,74.8C-27.5,75.9,-55,72.3,-69.3,58.9C-83.6,45.5,-84.7,22.3,-80.9,1.4C-77.1,-19.6,-68.4,-39.1,-54.6,-51.6C-40.8,-64.1,-21.8,-69.5,-2.8,-68.2C16.3,-66.8,32.5,-58.7,45.2,-58.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <motion.div 
        className="floating-shape shape-2"
        initial={{ x: 100, y: 100, opacity: 0 }}
        animate={{ 
          x: 0,
          y: [0, -20, 0],
          opacity: 0.3,
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#64FFDA" d="M56.1,36.5C64.9,23.1,56.3,-3.3,44.2,-22.2C32.1,-41.1,17.1,-52.5,-1.1,-52.1C-19.3,-51.7,-38.6,-39.5,-50.1,-20.9C-61.6,-2.3,-65.3,22.7,-54.6,39.5C-43.9,56.3,-18.8,64.9,4.9,62.1C28.6,59.3,57.2,45.1,64.8,27.1C72.4,9.1,59,-12.7,47.1,-35.1C35.2,-57.5,24.8,-80.5,6.8,-83.1C-11.2,-85.7,-35.7,-67.9,-50.1,-46.2C-64.5,-24.5,-68.7,1.1,-61.3,22.2C-53.9,43.3,-34.9,60,-13.3,68.4C8.3,76.8,22.6,76.9,35.5,68.6C48.4,60.3,59.9,43.6,62.9,26.4C65.9,9.2,60.4,-8.5,53.1,-26.9C45.8,-45.3,36.7,-64.4,19.5,-72.2C2.3,-80,-23.1,-76.5,-39.1,-63.5C-55.1,-50.5,-61.7,-28,-62.8,-5.8C-63.9,16.4,-59.5,38.4,-46.9,52.3C-34.3,66.2,-13.5,72,7.2,68.4C27.9,64.8,55.8,51.8,62.1,35.2C68.4,18.6,53.1,-1.6,42.3,-20.1C31.5,-38.6,25.2,-56.4,10.8,-63.2C-3.6,-70,-26.1,-65.9,-41.5,-52.4C-56.9,-38.9,-65.2,-15.9,-63.9,5.7C-62.6,27.3,-51.7,54.6,-35.1,65.8C-18.5,77,3.8,72.1,21.9,62.5C40,52.9,54,38.6,56.1,36.5Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div className="hero-container">
        {/* Text content - Simplified without zoom animation */}
        <div className="hero-content">
          <motion.h4 
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, my name is
          </motion.h4>
          
          <motion.h1 
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Venu Babu Banala
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              |
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I build <span className="highlight">digital experiences</span>
          </motion.h2>
          
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Crafting innovative solutions that blend beautiful design with 
            cutting-edge technology to create memorable user experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="cta-container"
          >
            <motion.a
              whileHover={{ 
                boxShadow: "0 5px 15px rgba(100, 255, 218, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="cta-btn"
            >
              Let's Connect
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="secondary-btn"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>

        {/* Image section */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-wrapper">
            <motion.img 
              src="/hero-image.png"
              alt="Profile"
              className="hero-image"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            
            <motion.div 
              className="tech-bubble react"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              React
            </motion.div>
            
            <motion.div 
              className="tech-bubble node"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
            >
              Node.js
            </motion.div>
            
            <motion.div 
              className="tech-bubble js"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
            >
              JavaScript
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social links */}
      <motion.div 
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        {[
          { icon: <FaGithub />, url: "https://github.com/Venukanna" },
          { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/venufullstack172" },
          // { icon: <FaTwitter />, url: "https://twitter.com" },
          { icon: <HiOutlineMail />, url: "mailto:venu996366@gmail.com" }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: "#64ffda" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {item.icon}
          </motion.a>
        ))}
        <div className="social-line"></div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaArrowDown />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;