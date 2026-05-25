const FlightCard = ({
  flight,
  travelClass,
  selectedFlight,
  setSelectedFlight,
  from,
  to,
}) => {
  return (
    <div className='result-flight-card'>
      <div className='airline-name'>
        ✈ {flight.airline}
      </div>

      <div className='flight-times'>
        <div>
          <h3>{flight.fromTime}</h3>
          <span>{from}</span>
        </div>

        <div className='flight-line'>
          <span>{flight.duration}</span>
          <div></div>
          <small>Nonstop</small>
        </div>

        <div>
          <h3>{flight.toTime}</h3>
          <span>{to}</span>
        </div>

        <div className='result-price'>
          <h3>
            $
            {travelClass === 'economy'
              ? flight.economyPrice
              : flight.businessPrice}
          </h3>

          <button
            onClick={() => setSelectedFlight(flight)}
            className={
              selectedFlight?.airline === flight.airline
                ? 'selected-btn'
                : ''
            }
          >
            {selectedFlight?.airline === flight.airline
              ? 'Selected'
              : 'Select'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlightCard