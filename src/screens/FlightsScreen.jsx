import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FlightCard from '../components/FlightCard'
import SeatSelection from '../components/SeatSelection'
import FlightSearchForm from '../components/FlightSearchForm'

const flights = [
  {
    airline: 'British Airways BA 178',
    fromTime: '19:30',
    toTime: '07:15',
    duration: '6h 45m',
    economyPrice: 542,
    businessPrice: 920,
  },
  {
    airline: 'American Airlines AA 100',
    fromTime: '22:00',
    toTime: '10:05',
    duration: '7h 05m',
    economyPrice: 489,
    businessPrice: 850,
  },
  {
    airline: 'Virgin Atlantic VS 4',
    fromTime: '18:15',
    toTime: '06:20',
    duration: '7h 05m',
    economyPrice: 615,
    businessPrice: 1050,
  },
  {
    airline: 'Delta Airlines DL 45',
    fromTime: '15:40',
    toTime: '03:55',
    duration: '7h 15m',
    economyPrice: 530,
    businessPrice: 980,
  },
  {
    airline: 'United Airlines UA 90',
    fromTime: '21:10',
    toTime: '09:25',
    duration: '7h 15m',
    economyPrice: 575,
    businessPrice: 1010,
  },
]

const airportCodes = {
  'New York': 'JFK',
  London: 'LHR',
  Paris: 'CDG',
  Rome: 'FCO',
  Barcelona: 'BCN',
  Dubai: 'DXB',
  Tokyo: 'NRT',
  Amsterdam: 'AMS',
  Singapore: 'SIN',
  Istanbul: 'IST',
  Belgrade: 'BEG',
  Budapest: 'BUD',
  Milan: 'MXP',
  'Los Angeles': 'LAX',
  Miami: 'MIA',
}

const FlightsScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)

 const params = new URLSearchParams(location.search)

const fromFromUrl = params.get('from') || 'New York'
const destinationFromUrl = params.get('to') || 'London'

const [from, setFrom] = useState(fromFromUrl)
const [to, setTo] = useState(destinationFromUrl)

  const [departure, setDeparture] = useState('2026-04-20')
  const [returnDate, setReturnDate] = useState('2026-04-27')
  const [passengers, setPassengers] = useState('1 Passenger')

  const [showResults, setShowResults] = useState(false)
  const [showSeats, setShowSeats] = useState(false)

  const [travelClass, setTravelClass] = useState('economy')
  const [selectedFlight, setSelectedFlight] = useState(null)

  useEffect(() => {
    if (!userInfo) {
      navigate(`/signin?redirect=${encodeURIComponent(location.pathname + location.search)}`)
    }
  }, [userInfo, navigate, location.pathname, location.search])

  const searchHandler = () => {
    if (from === to) {
      alert('From and To cannot be the same city')
      return
    }

    setShowResults(true)
  }

  const newSearchHandler = () => {
    setShowResults(false)
    setShowSeats(false)
    setSelectedFlight(null)
  }

  const continueHandler = () => {
    if (!selectedFlight) {
      alert('Please select a flight first')
      return
    }

    setShowSeats(true)
  }

  if (showSeats) {
    return (
      <SeatSelection
        selectedFlight={selectedFlight}
        travelClass={travelClass}
        departure={departure}
        from={from}
        to={to}
        airportCodes={airportCodes}
        onBack={() => setShowSeats(false)}
      />
    )
  }

  if (showResults) {
    return (
      <section className='flight-results-page'>
        <div className='flight-results-container'>
          <button className='new-search-btn' onClick={newSearchHandler}>
            ‹ New search
          </button>

          <h2>
            ✈ {from} → {to}
          </h2>

          <p>
            {departure} – {returnDate} • {passengers}
          </p>

          <div className='travel-class-box'>
            <span>Select travel class:</span>

            <div className='travel-class-grid'>
              <button
                className={travelClass === 'economy' ? 'class-active' : ''}
                onClick={() => setTravelClass('economy')}
              >
                <strong>Economy</strong>
                <small>Standard seating</small>
              </button>

              <button
                className={travelClass === 'business' ? 'class-active' : ''}
                onClick={() => setTravelClass('business')}
              >
                <strong>Business</strong>
                <small>Premium experience</small>
              </button>
            </div>
          </div>

          <div className='results-top'>
            <p>{flights.length} flights available</p>

            <div>
              <button>Price</button>
              <button>Duration</button>
              <button>Departure</button>
            </div>
          </div>

          <div className='flights-list'>
            {flights.map((flight, index) => (
              <FlightCard
                key={index}
                flight={flight}
                fromCode={airportCodes[from]}
                toCode={airportCodes[to]}
                travelClass={travelClass}
                selectedFlight={selectedFlight}
                setSelectedFlight={setSelectedFlight}
              />
            ))}
          </div>

          <button className='continue-seat-btn' onClick={continueHandler}>
            Continue to seat selection
          </button>
        </div>
      </section>
    )
  }

  return (
   <FlightSearchForm
  from={from}
  setFrom={setFrom}
  to={to}
  setTo={setTo}
  departure={departure}
  setDeparture={setDeparture}
  returnDate={returnDate}
  setReturnDate={setReturnDate}
  passengers={passengers}
  setPassengers={setPassengers}
  searchHandler={searchHandler}
/>
  )
}

export default FlightsScreen