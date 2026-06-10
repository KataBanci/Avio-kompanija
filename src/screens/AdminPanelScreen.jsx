import { useMemo, useState } from 'react'
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaPlaneDeparture,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa'
import {
  useDeleteBookingMutation,
  useGetBookingsQuery,
  useUpdateBookingStatusMutation,
} from '../slices/BookingApiSlice'

const bookingStatuses = ['pending', 'confirmed', 'completed', 'cancelled']

const AdminPanelScreen = () => {
  const { data: bookings = [], isLoading, error, refetch } = useGetBookingsQuery()
  const [updateBookingStatus] = useUpdateBookingStatusMutation()
  const [deleteBooking] = useDeleteBookingMutation()
  const [actionError, setActionError] = useState('')

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

  const statusChangeHandler = async (id, status) => {
    try {
      setActionError('')
      await updateBookingStatus({ bookingId: id, status }).unwrap()
      refetch()
    } catch (error) {
      setActionError(
        error?.data?.message || 'Booking status could not be updated.'
      )
    }
  }

  const deleteHandler = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this booking?'
    )

    if (confirmed) {
      try {
        setActionError('')
        await deleteBooking(id).unwrap()
        refetch()
      } catch (error) {
        setActionError(error?.data?.message || 'Booking could not be deleted.')
      }
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
            <div className='admin-stat-icon'>
              <FaPlaneDeparture />
            </div>
            <div>
              <span>Total bookings</span>
              <strong>{bookingStats.total}</strong>
            </div>
          </div>

          <div className='admin-stat-card'>
            <div className='admin-stat-icon active'>
              <FaCheckCircle />
            </div>
            <div>
              <span>Active bookings</span>
              <strong>{bookingStats.active}</strong>
            </div>
          </div>

          <div className='admin-stat-card'>
            <div className='admin-stat-icon cancelled'>
              <FaTimesCircle />
            </div>
            <div>
              <span>Cancelled</span>
              <strong>{bookingStats.cancelled}</strong>
            </div>
          </div>
        </div>

        <div className='admin-bookings-panel'>
          <div className='admin-panel-top'>
            <div>
              <h2>All Bookings</h2>
              <p>Edit booking status and see which customer bought each ticket.</p>
            </div>
          </div>

          {actionError && <p className='admin-action-error'>{actionError}</p>}

          {isLoading ? (
            <div className='admin-empty'>
              <h3>Loading bookings...</h3>
            </div>
          ) : error ? (
            <div className='admin-empty'>
              <h3>Bookings could not be loaded</h3>
            </div>
          ) : bookings.length === 0 ? (
            <div className='admin-empty'>
              <h3>No bookings found</h3>
              <p>New customer bookings will appear here after checkout.</p>
            </div>
          ) : (
            <div className='admin-booking-list'>
              {bookings.map((booking) => (
                <div className='admin-booking-card' key={booking._id}>
                  <div className='admin-booking-main'>
                    <div>
                      <span className='admin-booking-id'>
                        Booking #{booking._id}
                      </span>
                      <h3>
                        {booking.flight?.from} to {booking.flight?.to}
                      </h3>
                      <p>
                        {booking.user?.name || booking.passengerName} -{' '}
                        {booking.user?.email || booking.passengerEmail}
                      </p>
                    </div>

                    <span className={`admin-status ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className='admin-booking-details'>
                    <span>
                      <FaCalendarAlt />
                      Date: {booking.flight?.departureDate?.slice(0, 10)}
                    </span>
                    <span>
                      <FaPlaneDeparture />
                      Airline: {booking.flight?.airline}
                    </span>
                    <span>Class: {booking.travelClass}</span>
                    <span>Seats: {booking.seats?.join(', ') || '-'}</span>
                    <span>
                      <FaClock />
                      Payment: {booking.paymentMethod || 'Unknown'}
                    </span>
                    <strong>Total: ${booking.totalPrice}</strong>
                  </div>

                  <div className='admin-booking-actions'>
                    <label>
                      Status
                      <select
                        value={booking.status}
                        onChange={(e) =>
                          statusChangeHandler(booking._id, e.target.value)
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
                      onClick={() => deleteHandler(booking._id)}
                    >
                      <FaTrash />
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
