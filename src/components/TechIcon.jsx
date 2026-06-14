import { motion } from 'framer-motion'

const TechIcon = ({ icon: Icon, name, color, size = 'text-3xl' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="flex flex-col items-center gap-1 group"
    >
      {Icon ? (
        <Icon className={size} style={{ color }} />
      ) : (
        <span className={`${size} font-bold text-white`}>{name.slice(0, 2)}</span>
      )}
      <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  )
}

export default TechIcon
