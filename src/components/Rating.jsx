import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((x) => (
        <span key={x}>
          {value >= x ? (
            <FaStar />
          ) : value >= x - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      <span className="rating-text">{text}</span>
    </div>
  )
}

export default Rating