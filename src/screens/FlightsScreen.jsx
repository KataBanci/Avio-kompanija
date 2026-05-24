const FlightsScreen = () => {
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
                <input type='text' placeholder='Origin city or airport' />
              </div>
            </div>

            <div className='form-group'>
              <label>To</label>
              <div className='input-box'>
                <span>⌖</span>
                <input type='text' placeholder='Destination city or airport' />
              </div>
            </div>

            <div className='form-group'>
              <label>Departure</label>
              <div className='input-box'>
                <span>▣</span>
                <input type='date' defaultValue='2026-04-20' />
              </div>
            </div>

            <div className='form-group'>
              <label>Return</label>
              <div className='input-box'>
                <span>▣</span>
                <input type='date' defaultValue='2026-04-27' />
              </div>
            </div>

            <div className='form-group'>
              <label>Passengers</label>
              <div className='input-box'>
                <span>♙</span>
                <select defaultValue='1 Passenger'>
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                </select>
              </div>
            </div>
          </div>

          <button className='search-flight-btn'>⌕ Search flights</button>
        </div>
      </div>
    </section>
  )
}

export default FlightsScreen