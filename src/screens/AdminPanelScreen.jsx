import { useMemo, useState } from 'react'
import { deleteBooking, getBookings, updateBooking } from '../utils/bookingsStorage'

const bookingStatuses = ['pending', 'confirmed', 'completed', 'cancelled']

const AdminPanelScreen = () => {
  const [bookings, setBookings] = useState(getBookings())

  const bookingStats = useMemo(() => {
    const activeBookings = bookings.filter(
      (booking) => booking.status !== 'cancelled'
    )
    const cancelledBookings = bookings.filter(
      (booking) => booking.status === 'cancelled'
    )

    return {
      total: bookings.length,
      active: activeBookings.length,
      cancelled: cancelledBookings.length,
    }
  }, [bookings])

  const statusChangeHandler = (id, status) => {
    setBookings(updateBooking(id, { status }))
  }

  const deleteHandler = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this booking?'
    )

    if (confirmed) {
      setBookings(deleteBooking(id))
    }
  }

  return (
    <section className='admin-page'>
      <div className='admin-container'>
        <div className='admin-header'>
          <div>
            <p>Administrator</p>
            <h1>Booking Management</h1>
          </div>
        </div>

        <div className='admin-stats'>
          <div className='admin-stat-card'>
            <span>Total bookings</span>
            <strong>{bookingStats.total}</strong>
          </div>

          <div className='admin-stat-card'>
            <span>Active bookings</span>
            <strong>{bookingStats.active}</strong>
          </div>

          <div className='admin-stat-card'>
            <span>Cancelled</span>
            <strong>{bookingStats.cancelled}</strong>
          </div>
        </div>

        <div className='admin-bookings-panel'>
          <div className='admin-panel-top'>
            <div>
              <h2>All Bookings</h2>
              <p>Edit booking status or remove bookings from local storage.</p>
            </div>
          </div>

          {bookings.length === 0 ? (
            <div className='admin-empty'>
              <h3>No bookings found</h3>
              <p>New customer bookings will appear here after checkout.</p>
            </div>
          ) : (
            <div className='admin-booking-list'>
              {bookings.map((booking) => (
                <div className='admin-booking-card' key={booking.id}>
                  <div className='admin-booking-main'>
                    <div>
                      <span className='admin-booking-id'>
                        Booking #{booking.id}
                      </span>
                      <h3>{booking.route}</h3>
                      <p>
                        {booking.userName || 'Unknown customer'} -{' '}
                        {booking.userEmail || 'No email'}
                      </p>
                    </div>

                    <span className={`admin-status ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className='admin-booking-details'>
                    <span>Date: {booking.date}</span>
                    <span>Airline: {booking.airline}</span>
                    <span>Class: {booking.classType}</span>
                    <span>Seats: {booking.seats}</span>
                    <span>Payment: {booking.paymentMethod || 'Unknown'}</span>
                    <span>Total: {booking.price}</span>
                  </div>

                  <div className='admin-booking-actions'>
                    <label>
                      Status
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          statusChangeHandler(booking.id, e.target.value)
                        }
                      >
                        {bookingStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      className='admin-delete-btn'
                      onClick={() => deleteHandler(booking.id)}
                    >
                      Delete Booking
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AdminPanelScreen
