import { useState } from 'react'

const Payment = ({
  selectedFlight,
  travelClass,
  selectedSeats,
  departure,
  from,
  to,
  airportCodes,
  onBack,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const [isPaid, setIsPaid] = useState(false)

  const price =
    travelClass === 'economy'
      ? selectedFlight.economyPrice
      : selectedFlight.businessPrice

  const total = price * selectedSeats.length

  const saveBookingHandler = () => {
    const newBooking = {
      id: `BK${Date.now()}`,
      route: `${from} (${airportCodes[from]}) ✈ ${to} (${airportCodes[to]})`,
      date: departure,
      passengers:
        selectedSeats.length === 1
          ? '1 passenger'
          : `${selectedSeats.length} passengers`,
      price: `$${total}`,
      airline: selectedFlight.airline,
      departure: selectedFlight.fromTime,
      arrival: selectedFlight.toTime,
      duration: selectedFlight.duration,
      classType: travelClass === 'economy' ? 'Economy' : 'Business',
      seats: selectedSeats.join(', '),
      status: 'confirmed',
    }

    const savedBookings =
      JSON.parse(localStorage.getItem('bookings')) || []

    localStorage.setItem(
      'bookings',
      JSON.stringify([...savedBookings, newBooking])
    )

    setIsPaid(true)
  }

  if (isPaid) {
    return (
      <section className='confirmation-page'>
        <div className='confirmation-box'>
          <div className='success-icon'>✓</div>

          <h1>Booking Confirmed!</h1>

          <p>
            Your flight has been successfully booked.
            A confirmation email has been sent to your email address.
          </p>

          <div className='confirmation-details'>
            <h2>Booking Details</h2>

            <div>
              <span>Route</span>
              <strong>
                {airportCodes[from]} → {airportCodes[to]}
              </strong>
            </div>

            <div>
              <span>Date</span>
              <strong>{departure}</strong>
            </div>

            <div>
              <span>Class</span>
              <strong>
                {travelClass === 'economy' ? 'Economy' : 'Business'}
              </strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{selectedSeats.join(', ')}</strong>
            </div>

            <div>
              <span>Passengers</span>
              <strong>{selectedSeats.length}</strong>
            </div>

            <hr />

            <div className='confirmation-total'>
              <span>Total</span>
              <strong>${total}</strong>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='payment-page'>
      <div className='payment-container'>
        <button className='new-search-btn' onClick={onBack}>
          ‹ Back to seat selection
        </button>

        <h1>Payment</h1>
        <p>Complete your booking</p>

        <div className='payment-content'>
          <div className='payment-left'>
            <div className='payment-methods'>
              <button
                className={paymentMethod === 'PayPal' ? 'payment-active' : ''}
                onClick={() => setPaymentMethod('PayPal')}
              >
                <strong>PayPal</strong>
                <span>PayPal</span>
              </button>

              <button
                className={
                  paymentMethod === 'Credit Card' ? 'payment-active' : ''
                }
                onClick={() => setPaymentMethod('Credit Card')}
              >
                <strong>▭</strong>
                <span>Credit Card</span>
              </button>
            </div>

            {paymentMethod === 'PayPal' ? (
              <div className='payment-box'>
                <p>
                  Click the button below to proceed with PayPal payment
                </p>

                <button
                  className='pay-btn'
                  onClick={saveBookingHandler}
                >
                  Pay ${total} with PayPal
                </button>
              </div>
            ) : (
              <div className='payment-box'>
                <label>Card Number</label>

                <input
                  type='text'
                  placeholder='1234 5678 9012 3456'
                />

                <div className='payment-row'>
                  <div>
                    <label>Expiry Date</label>

                    <input
                      type='text'
                      placeholder='MM/YY'
                    />
                  </div>

                  <div>
                    <label>CVV</label>

                    <input
                      type='text'
                      placeholder='123'
                    />
                  </div>
                </div>

                <label>Cardholder Name</label>

                <input
                  type='text'
                  placeholder='John Doe'
                />

                <button
                  className='pay-btn'
                  onClick={saveBookingHandler}
                >
                  Pay ${total}
                </button>
              </div>
            )}
          </div>

          <div className='booking-summary'>
            <h2>Booking Summary</h2>

            <div>
              <span>Route</span>
              <strong>
                {airportCodes[from]} → {airportCodes[to]}
              </strong>
            </div>

            <div>
              <span>Date</span>
              <strong>{departure}</strong>
            </div>

            <div>
              <span>Class</span>
              <strong>
                {travelClass === 'economy'
                  ? 'Economy'
                  : 'Business'}
              </strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{selectedSeats.join(', ')}</strong>
            </div>

            <div>
              <span>Passengers</span>
              <strong>{selectedSeats.length}</strong>
            </div>

            <hr />

            <div>
              <span>Price per ticket</span>
              <strong>${price}</strong>
            </div>

            <div className='total-row'>
              <span>Total</span>
              <strong>${total}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment