import { motion } from 'framer-motion'
import StarRating from './StarRating'
import { glassEffect } from '../styles/Uistyles'

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      style={{ position: 'relative' }}
      role="article"
      aria-label={`Skill: ${skill.name}`}
    >
      <div className={`${glassEffect} flex flex-col items-center gap-3 p-5 text-center transition transition-all duration-300 hover:bg-gray-400/10`}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          {Icon && <Icon className="text-2xl" style={{ color: skill.color }} aria-hidden="true" />}
        </div>

        <div className="flex flex-col gap-1 w-full min-w-0">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <h3 className="text-white font-semibold text-sm whitespace-nowrap">{skill.name}</h3>
            <StarRating rating={skill.rating} />
          </div>
          <p className="text-gray-400 text-xs leading-relaxed overflow-hidden">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default SkillCard
