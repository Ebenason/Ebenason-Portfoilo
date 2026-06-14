import { FaStar } from 'react-icons/fa'

const StarRating = ({ rating, max = 5 }) => {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= rating
        return (
          <FaStar
            key={i}
            className={`text-sm ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
            aria-hidden="true"
          />
        )
      })}
    </span>
  )
}

export default StarRating
