import { useParams, useNavigate } from 'react-router-dom'

const bookings = [
  {
    id: 'BK001',
    route: 'New York (JFK) ✈ London (LHR)',
    date: 'May 15, 2026',
    passengers: '2 passengers',
    price: '$1084',
    airline: 'British Airways BA 178',
    departure: '19:30',
    arrival: '07:15',
    duration: '6h 45m',
    classType: 'Economy',
    seats: '10E, 10F',
  },

  {
    id: 'BK002',
    route: 'Paris (CDG) ✈ Dubai (DXB)',
    date: 'Jun 20, 2026',
    passengers: '1 passenger',
    price: '$712',
    airline: 'Emirates EK 72',
    departure: '14:20',
    arrival: '23:10',
    duration: '6h 50m',
    classType: 'Business',
    seats: '4A',
  },
]

const BookingDetailsScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const booking = bookings.find((b) => b.id === id)

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
          ← Back to profile
        </button>

        <div className='booking-details-card'>

          <h1>Flight Details</h1>

          <p><strong>Booking ID:</strong> {booking.id}</p>

          <p><strong>Route:</strong> {booking.route}</p>

          <p><strong>Date:</strong> {booking.date}</p>

          <p><strong>Passengers:</strong> {booking.passengers}</p>

          <p><strong>Airline:</strong> {booking.airline}</p>

          <p><strong>Departure:</strong> {booking.departure}</p>

          <p><strong>Arrival:</strong> {booking.arrival}</p>

          <p><strong>Duration:</strong> {booking.duration}</p>

          <p><strong>Class:</strong> {booking.classType}</p>

          <p><strong>Seats:</strong> {booking.seats}</p>

          <h2>Total: {booking.price}</h2>

        </div>
      </div>
    </section>
  )
}

export default BookingDetailsScreen