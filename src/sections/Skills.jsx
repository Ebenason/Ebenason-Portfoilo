import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import SectionHeading from '../components/SectionHeading'
import { SKILLS } from '../constants'

const spans = [2, 1, 1, 1, 1, 1, 1, 1, 2, 1]

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 mt-10" aria-label="Skills section">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

      <div className="max-w-6xl mx-auto">
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-5 ">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${spans[i] === 2 ? 'col-span-2' : 'col-span-1'} min-w-0`}
              style={{ order: i }}
            >
              <SkillCard skill={skill} index={i} />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:hidden">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-full sm:w-[calc(50%-10px)]"
            >
              <SkillCard skill={skill} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
