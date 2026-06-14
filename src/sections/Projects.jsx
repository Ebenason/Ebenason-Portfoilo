import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 mt-10 md:px-12" aria-label="Projects section">
      <SectionHeading title="Projects" subtitle="Some things I've built" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
