import { useParams, useNavigate } from 'react-router-dom'
import { getBookingById } from '../utils/bookingsStorage'

const BookingDetailsScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const booking = getBookingById(id)

  if (!booking) {
    return <h2>Booking not found</h2>
  }

  return (
    <section className='booking-details-page'>
      <div className='booking-details-container'>
        <button
          className='back-btn'
          onClick={() => navigate('/profile')}
        >
          Back to profile
        </button>

        <div className='booking-details-card'>
          <h1>Flight Details</h1>

          <p><strong>Booking ID:</strong> {booking.id}</p>
          <p><strong>Customer:</strong> {booking.userName || 'Unknown'}</p>
          <p><strong>Email:</strong> {booking.userEmail || 'Unknown'}</p>
          <p><strong>Route:</strong> {booking.route}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Passengers:</strong> {booking.passengers}</p>
          <p><strong>Airline:</strong> {booking.airline}</p>
          <p><strong>Departure:</strong> {booking.departure}</p>
          <p><strong>Arrival:</strong> {booking.arrival}</p>
          <p><strong>Duration:</strong> {booking.duration}</p>
          <p><strong>Class:</strong> {booking.classType}</p>
          <p><strong>Seats:</strong> {booking.seats}</p>
          <p><strong>Payment:</strong> {booking.paymentMethod || 'Unknown'}</p>
          <p><strong>Status:</strong> {booking.status}</p>

          <h2>Total: {booking.price}</h2>
        </div>
      </div>
    </section>
  )
}

export default BookingDetailsScreen
