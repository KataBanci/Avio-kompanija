import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../slices/authSlice'

const ProfileScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin')
    }
  }, [userInfo, navigate])

  const signOutHandler = () => {
    dispatch(logout())
    navigate('/signin')
  }

  return (
    <section className='profile-page'>
      <div className='profile-container'>
        <div className='profile-header'>
          <div>
            <h1>My Account</h1>
            <p>Manage your bookings and profile</p>
          </div>

          <button onClick={signOutHandler} className='signout-btn'>
            Sign Out
          </button>
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

            <button className='edit-profile-btn'>Edit Profile</button>
          </div>

          <div className='bookings-section'>
            <h2>My Bookings</h2>

            <div className='booking-card'>
              <div className='booking-top'>
                <span>Booking #BK001</span>
                <span className='confirmed-badge'>confirmed</span>
              </div>

              <h3>New York (JFK) ✈ London (LHR)</h3>

              <div className='booking-info'>
                <span>▣ May 15, 2026</span>
                <span>♙ 2 passengers</span>
                <span>▭ $1084</span>
              </div>

              <div className='booking-actions'>
                <button>Modify</button>
                <button className='cancel-btn'>Cancel</button>
              </div>
            </div>

            <div className='booking-card'>
              <div className='booking-top'>
                <span>Booking #BK002</span>
                <span className='confirmed-badge'>confirmed</span>
              </div>

              <h3>Paris (CDG) ✈ Dubai (DXB)</h3>

              <div className='booking-info'>
                <span>▣ Jun 20, 2026</span>
                <span>♙ 1 passenger</span>
                <span>▭ $712</span>
              </div>

              <div className='booking-actions'>
                <button>Modify</button>
                <button className='cancel-btn'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileScreen