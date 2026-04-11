import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Flight = ({ flight }) => {
  if (!flight) return null

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/flight/${flight._id}`}>
        <Card.Img
          src={flight.image}
          alt={flight.destination}
          variant="top"
          style={{ height: '250px', objectFit: 'cover' }}
        />
      </Link>

      <Card.Body>
        <Link to={`/flight/${flight._id}`}>
          <Card.Title as="div" className="flight-title">
            <strong>{flight.destination}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={flight.rating}
            text={`${flight.numReviews} recenzija`}
          />
        </Card.Text>

        <Card.Text as="div">
          <strong>Polazak:</strong> {flight.departure}
        </Card.Text>

        <Card.Text as="div">
          <strong>Dolazak:</strong> {flight.arrival}
        </Card.Text>

        <Card.Text as="h3">
          {flight.price} EUR
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Flight