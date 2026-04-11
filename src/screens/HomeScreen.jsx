import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Flight from '../components/Flight'
import flights from '../flights_list'

const HomeScreen = () => {
  return (
    <>
      <h1>Dostupni letovi</h1>

      <Row>
        {flights.map((flight) => (
          <Col key={flight._id} sm={12} md={6} lg={4} xl={3}>
            <Flight flight={flight} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen