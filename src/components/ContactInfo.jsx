import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { CONTACT_INFO } from '../constants'
import { glassEffect } from '../styles/Uistyles'

const items = [
  { label: 'Name', value: CONTACT_INFO.name, icon: FaUser },
  { label: 'Email', value: CONTACT_INFO.email, icon: FaEnvelope, href: `mailto:${CONTACT_INFO.email}` },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', icon: FaLinkedin, href: CONTACT_INFO.linkedin },
  { label: 'GitHub', value: 'View on GitHub', icon: FaGithub, href: CONTACT_INFO.github },
  { label: 'Instagram', value: 'Follow on Instagram', icon: FaInstagram, href: CONTACT_INFO.instagram },
  { label: 'Location', value: CONTACT_INFO.location, icon: FaMapMarkerAlt },
]

const ContactInfo = () => {
  return (
    <div className={`${glassEffect} flex flex-col gap-6`}>
      <h2 className="text-xl font-semibold text-white">Contact Info</h2>
      <ul className="flex flex-col gap-4" role="list">
        {items.map(({ label, value, icon: Icon, href }) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group focus-visible:outline-2 focus-visible:outline-yellow-400/60 rounded-lg"
                aria-label={`${label}: ${value}`}
              >
                <span className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="text-yellow-400" aria-hidden="true" />
                </span>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{value}</span>
              </a>
            ) : (
              <span className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center">
                  <Icon className="text-yellow-400" aria-hidden="true" />
                </span>
                <span className="text-gray-300 text-sm">{value}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactInfo
