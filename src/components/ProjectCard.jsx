import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { glassEffect } from '../styles/Uistyles'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${glassEffect} flex flex-col overflow-hidden group`}
      role="article"
      aria-label={`Project: ${project.name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {project.tech.map((t) => (
            <span
              key={t}
              role="listitem"
              className="px-3 py-1 text-xs font-medium text-yellow-300/80 bg-yellow-300/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-colors"
              aria-label={`View ${project.name} live demo`}
            >
              <FaExternalLinkAlt aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
