import ExperienceCard from '../components/ExperienceCard'
import SectionHeading from '../components/SectionHeading'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <section className="min-h-screen py-24 px-4 mt-10" aria-label="Experience section">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Experience
