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

const FlightSearchForm = ({
  from,
  setFrom,
  to,
  departure,
  setDeparture,
  returnDate,
  setReturnDate,
  passengers,
  setPassengers,
  searchHandler,
}) => {
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

                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
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

                <input value={to} disabled />
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

export default FlightSearchForm