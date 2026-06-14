import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { glassEffect } from '../styles/Uistyles'

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`${glassEffect} flex flex-col overflow-hidden group`}
      role="article"
      aria-label={`${experience.position} at ${experience.company}`}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.position}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center text-center gap-3 p-6">
        <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center -mt-5 border-2 border-gray-900">
          <FaBriefcase className="text-xl text-yellow-400" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{experience.position}</h3>
          <p className="text-yellow-400/80 text-sm font-medium">{experience.company}</p>
        </div>

        {experience.duration && (
          <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
            {experience.duration}
          </span>
        )}

        <p className="text-gray-400 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.article>
  )
}

export default ExperienceCard
