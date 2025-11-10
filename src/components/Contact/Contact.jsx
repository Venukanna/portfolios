// import './Contact.css'
// import { motion } from 'framer-motion'
// import { useForm } from 'react-hook-form'

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm()

//   const onSubmit = (data) => {
//     console.log(data)
//     // Here you would typically send the data to your backend
//     alert('Message sent successfully!')
//     reset()
//   }

//   return (
//     <section id="contact" className="contact">
//       <div className="contact-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="contact-content"
//         >
//           <h2 className="section-title">Get In Touch</h2>
//           <p>
//             Although I'm not currently looking for any new opportunities, my
//             inbox is always open. Whether you have a question or just want to say
//             hi, I'll try my best to get back to you!
//           </p>
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="mailto:youremail@example.com"
//             className="email-link"
//           >
//             Say Hello
//           </motion.a>
//         </motion.div>

//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           onSubmit={handleSubmit(onSubmit)}
//           className="contact-form"
//         >
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               id="name"
//               type="text"
//               {...register('name', { required: 'Name is required' })}
//               className={errors.name ? 'error' : ''}
//             />
//             {errors.name && (
//               <span className="error-message">{errors.name.message}</span>
//             )}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: 'Invalid email address',
//                 },
//               })}
//               className={errors.email ? 'error' : ''}
//             />
//             {errors.email && (
//               <span className="error-message">{errors.email.message}</span>
//             )}
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows="5"
//               {...register('message', { required: 'Message is required' })}
//               className={errors.message ? 'error' : ''}
//             ></textarea>
//             {errors.message && (
//               <span className="error-message">{errors.message.message}</span>
//             )}
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             className="submit-btn"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   )
// }

// export default Contact


import './Contact.css';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xkgzovpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'cors', // Important for Formspree
      });

      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to say
            hi, I'll try my best to get back to you!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:Venu996366@gmail.com"
            className="email-link"
          >
            Say Hello
          </motion.a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={errors.name ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={errors.email ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              {...register('message', { required: 'Message is required' })}
              className={errors.message ? 'error' : ''}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;