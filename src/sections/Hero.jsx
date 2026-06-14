import { motion } from 'framer-motion'
import { TECH_LOGOS } from '../constants'
import TechIcon from '../components/TechIcon'
import { glassEffect } from '../styles/Uistyles'
import myImg from '../assets/myimg.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16"
      aria-label="Hero section"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`${glassEffect} flex flex-col items-center gap-6 p-8 md:p-10 w-full lg:w-[35%]`}
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-yellow-400/20">
            <img
              src={myImg}
              alt="Ebenason"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 text-sm italic text-center leading-relaxed">
            &ldquo;Building modern, responsive, and user-focused web
            experiences.&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="flex flex-col gap-8 w-full lg:w-[60%]"
        >
          <div className={`${glassEffect}`}>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              About Me
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Hi, I'm{' '}
              <span className="text-yellow-400 font-semibold">EBENASON</span>, a
              passionate web developer focused on creating responsive, scalable,
              and user-friendly applications. I enjoy transforming ideas into
              meaningful digital experiences while continuously learning modern
              technologies and development practices.
            </p>
          </div>

          <div className={`${glassEffect}`}>
            <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">
              Tech Stack
            </h2>
            <div
              className="flex flex-wrap gap-5 justify-center md:justify-start"
              role="list"
              aria-label="Technologies I work with"
            >
              {TECH_LOGOS.map((tech) => (
                <div key={tech.name} role="listitem">
                  <TechIcon
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="contactmeButton flex justify-start items-center">
            <a
              href="#contact"
              className="inline-block mx-4 w-fit px-8 py-3 rounded-xl bg-yellow-500 backdrop-blur-xl text-black font-semibold hover:bg-yellow-400 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-yellow-400/60"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
