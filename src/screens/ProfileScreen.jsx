import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../slices/authSlice'
import EditProfile from '../components/EditProfile'

const initialBookings = [
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
    status: 'confirmed',
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
    status: 'confirmed',
  },
]

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
      const savedBookings =
        JSON.parse(localStorage.getItem('bookings')) || []

      setBookings([...initialBookings, ...savedBookings])
    }
  }, [userInfo, navigate])

  const signOutHandler = () => {
    dispatch(logout())
    navigate('/signin')
  }

  const deleteHandler = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    )

    setBookings(updatedBookings)

    const customBookings = updatedBookings.filter(
      (booking) =>
        booking.id !== 'BK001' &&
        booking.id !== 'BK002'
    )

    localStorage.setItem(
      'bookings',
      JSON.stringify(customBookings)
    )
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
              <div className='profile-avatar'>👤</div>

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

            {showEditProfile && (
              <EditProfile
                userInfo={userInfo}
                onClose={() => setShowEditProfile(false)}
              />
            )}
          </div>

          <div className='bookings-section'>
            <h2>My Bookings</h2>

            {bookings.map((booking) => (
              <div
                className='booking-card'
                key={booking.id}
              >
                <div className='booking-top'>
                  <span>Booking #{booking.id}</span>

                  <span className='confirmed-badge'>
                    {booking.status}
                  </span>
                </div>

                <h3>{booking.route}</h3>

                <div className='booking-info'>
                  <span>▣ {booking.date}</span>
                  <span>♙ {booking.passengers}</span>
                  <span>▭ {booking.price}</span>
                </div>

                <div className='booking-actions'>
                  <button
                    onClick={() =>
                      navigate(`/booking/${booking.id}`)
                    }
                  >
                    Flight Details
                  </button>

                  <button
                    className='delete-btn'
                    onClick={() =>
                      deleteHandler(booking.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProfileScreen