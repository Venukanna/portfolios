// src/components/Certifications/Certifications.jsx
import './Certifications.css'
import { useState } from 'react'

// All certifications are local
const certifications = [
  {
    title: 'Full Stack Java Developer Certification',
    issuer: 'EXCELR',
    date: '18 December 2024',
    image: '/java-cert.png',      // local image in src/assets/
    pdf: '/Java fsd.pdf',        // PDF file in public folder
  },
{
   title: 'Certificate of Internship',
  issuer: 'Aivariant',
  date: '14th Jan 2025',
  image: '/Internship.png',
  pdf: '/Internship Certificate.pdf',
},
{
 title: 'Getting Started with Docker',
  issuer: 'Simplilearn SkillUp',
  date: '26th July 2024',
  image: '/Docker.png',
  pdf: '/Docker certification.pdf',
}
]

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const openModal = (image) => {
    setCurrentImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setCurrentImage('')
  }

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div
                className="certification-image"
                onClick={() => openModal(cert.image)}
              >
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <p><strong>Date:</strong> {cert.date}</p>
                <div className="certification-links">
                  {cert.pdf && (
                    <a href={cert.pdf} download>
                      📄 Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <img src={currentImage} alt="Full Certificate" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
