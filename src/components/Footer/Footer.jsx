import './Footer.css'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="footer-links">
            <a href="https://github.com/Venukanna" target="_blank" rel="noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/venufullstack172" target="_blank" rel="noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="footer-icon" />
            </a> */}
            <a href="mailto:youremail@example.com">
              <HiOutlineMail className="footer-icon" />
            </a>
          </div>
          <p>Designed & Built by Venu Babu Banala</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer