import { useState } from 'react'
import FlightCard from '../components/FlightCard'
import SeatSelection from '../components/SeatSelection'

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

const cities = [
  'New York',
  'London',
  'Paris',
  'Rome',
  'Barcelona',
  'Dubai',
  'Tokyo',
  'Amsterdam',
  'Singapore',
  'Istanbul',
  'Belgrade',
  'Budapest',
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
}

const FlightsScreen = () => {
  const [from, setFrom] = useState('New York')
  const [to, setTo] = useState('London')
  const [departure, setDeparture] = useState('2026-04-20')
  const [returnDate, setReturnDate] = useState('2026-04-27')
  const [passengers, setPassengers] = useState('1 Passenger')

  const [showResults, setShowResults] = useState(false)
  const [showSeats, setShowSeats] = useState(false)

  const [travelClass, setTravelClass] = useState('economy')
  const [selectedFlight, setSelectedFlight] = useState(null)

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
    <section className='flights-page'>
      <div className='flights-container'>
        <h1>Search flights</h1>
        <p>Enter your travel details to find the best flights</p>

        <div className='flight-search-box'>
          <div className='trip-buttons'>
            <button className='trip-active'>Round trip</button>
            <button className='trip-btn'>One way</button>
          </div>

          <div className='flight-form-grid'>
            <div className='form-group'>
              <label>From</label>
              <div className='input-box'>
                <span>⌖</span>

                <select value={from} onChange={(e) => setFrom(e.target.value)}>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label>To</label>
              <div className='input-box'>
                <span>⌖</span>

                <select value={to} onChange={(e) => setTo(e.target.value)}>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='form-group'>
              <label>Departure</label>
              <div className='input-box'>
                <span>▣</span>

                <input
                  type='date'
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>
            </div>

            <div className='form-group'>
              <label>Return</label>
              <div className='input-box'>
                <span>▣</span>

                <input
                  type='date'
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>

            <div className='form-group'>
              <label>Passengers</label>
              <div className='input-box'>
                <span>♙</span>

                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                </select>
              </div>
            </div>
          </div>

          <button className='search-flight-btn' onClick={searchHandler}>
            ⌕ Search flights
          </button>
        </div>
      </div>
    </section>
  )
}

export default FlightsScreen