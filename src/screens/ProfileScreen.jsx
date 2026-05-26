import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../slices/authSlice'
import EditProfile from '../components/EditProfile'
import { deleteBooking, getBookings } from '../utils/bookingsStorage'

const ProfileScreen = () => {
  const [bookings, setBookings] = useState([])
  const [showEditProfile, setShowEditProfile] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    } else {
      setBookings(getBookings())
    }
  }, [userInfo, navigate])

  const signOutHandler = () => {
    dispatch(logout())
    navigate('/signin')
  }

  const deleteHandler = (id) => {
    setBookings(deleteBooking(id))
  }

  return (
    <section className='profile-page'>
      <div className='profile-container'>
        <div className='profile-header'>
          <div>
            <h1>My Account</h1>
            <p>Manage your bookings and profile</p>
          </div>
        </div>

        <div className='profile-layout'>
          <div className='profile-card'>
            <div className='profile-user'>
              <div className='profile-avatar'>User</div>

              <div>
                <h3>{userInfo?.name || 'John Doe'}</h3>
                <p>{userInfo?.email || 'john@example.com'}</p>
              </div>
            </div>

            <button
              className='edit-profile-btn'
              onClick={() => setShowEditProfile(true)}
            >
              Edit Profile
            </button>

            <button className='signout-btn' onClick={signOutHandler}>
              Sign Out
            </button>

            {showEditProfile && (
              <EditProfile
                userInfo={userInfo}
                onClose={() => setShowEditProfile(false)}
              />
            )}
          </div>

          <div className='bookings-section'>
            <h2>My Bookings</h2>

            {bookings.length === 0 ? (
              <p>No bookings yet.</p>
            ) : (
              bookings.map((booking) => (
                <div className='booking-card' key={booking.id}>
                  <div className='booking-top'>
                    <span>Booking #{booking.id}</span>

                    <span className='confirmed-badge'>
                      {booking.status}
                    </span>
                  </div>

                  <h3>{booking.route}</h3>

                  <div className='booking-info'>
                    <span>Date: {booking.date}</span>
                    <span>{booking.passengers}</span>
                    <span>{booking.price}</span>
                  </div>

                  <div className='booking-actions'>
                    <button onClick={() => navigate(`/booking/${booking.id}`)}>
                      Flight Details
                    </button>

                    <button
                      className='delete-btn'
                      onClick={() => deleteHandler(booking.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileScreen
