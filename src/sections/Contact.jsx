import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import SectionHeading from '../components/SectionHeading'

const Contact = () => {
  return (
    <section className="min-h-screen py-24 px-4 mt-10" aria-label="Contact section">
      <SectionHeading title="Contact" subtitle="Get in touch — I'd love to hear from you" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <ContactInfo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
