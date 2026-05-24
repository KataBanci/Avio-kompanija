import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const destinations = [
  {
    city: 'Paris',
    country: 'France',
    image: '/images/destinations/paris.avif',
    price: '$542',
    description:
      'The City of Light offers iconic landmarks, world-class museums, and unforgettable cuisine.',
  },

  {
    city: 'Rome',
    country: 'Italy',
    image: '/images/destinations/rome.avif',
    price: '$628',
    description:
      'Discover ancient history, stunning architecture, and authentic Italian culture in the Eternal City.',
  },

  {
    city: 'London',
    country: 'United Kingdom',
    image: '/images/destinations/london.avif',
    price: '$542',
    description:
      'Experience royal heritage, vibrant culture, and world-renowned attractions in the British capital.',
  },

  {
    city: 'Barcelona',
    country: 'Spain',
    image: '/images/destinations/barcelona.avif',
    price: '$485',
    description:
      'Enjoy sunny beaches, Gaudí masterpieces, and vibrant Mediterranean atmosphere.',
  },

  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    image: '/images/destinations/dubai.avif',
    price: '$712',
    description:
      'Explore luxury shopping, ultramodern architecture, and endless entertainment options.',
  },

  {
    city: 'Milan',
    country: 'Italy',
    image: '/images/destinations/milan.avif',
    price: '$628',
    description:
      'The fashion capital offers exquisite design, historic landmarks, and Italian elegance.',
  },

  {
    city: 'New York',
    country: 'United States',
    image: '/images/destinations/newyork.avif',
    price: '$389',
    description:
      'The city that never sleeps offers iconic skylines, diverse culture, and endless opportunities.',
  },

  {
    city: 'Budapest',
    country: 'Hungary',
    image: '/images/destinations/budapest.jpg',
    price: '$456',
    description:
      'Discover thermal baths, stunning architecture, and rich history along the Danube River.',
  },

  {
    city: 'Tokyo',
    country: 'Japan',
    image: '/images/destinations/tokyo.avif',
    price: '$895',
    description:
      'Experience the perfect blend of traditional culture and cutting-edge technology.',
  },

  {
    city: 'Amsterdam',
    country: 'Netherlands',
    image: '/images/destinations/amsterdam.avif',
    price: '$512',
    description:
      'Charming canals, world-class museums, and vibrant cultural scene await.',
  },

  {
    city: 'Singapore',
    country: 'Singapore',
    image: '/images/destinations/singapore.avif',
    price: '$782',
    description:
      'A futuristic garden city with diverse cultures, amazing food, and modern marvels.',
  },

  {
    city: 'Istanbul',
    country: 'Turkey',
    image: '/images/destinations/istanbul.avif',
    price: '$495',
    description:
      'Where East meets West with breathtaking architecture and rich traditions.',
  },

  {
    city: 'Sydney',
    country: 'Australia',
    image: '/images/destinations/sydney.avif',
    price: '$1142',
    description:
      "Iconic harbor, beautiful beaches, and vibrant urban life in Australia's largest city.",
  },

  {
    city: 'Prague',
    country: 'Czech Republic',
    image: '/images/destinations/prague.avif',
    price: '$425',
    description:
      'Medieval charm meets modern culture in this fairy-tale European capital.',
  },

  {
    city: 'Vienna',
    country: 'Austria',
    image: '/images/destinations/vienna.avif',
    price: '$538',
    description:
      'Imperial palaces, classical music heritage, and elegant coffee culture.',
  },

  {
    city: 'Athens',
    country: 'Greece',
    image: '/images/destinations/athens.avif',
    price: '$498',
    description:
      'Cradle of Western civilization with ancient ruins and Mediterranean charm.',
  },

  {
    city: 'Lisbon',
    country: 'Portugal',
    image: '/images/destinations/lisbon.avif',
    price: '$465',
    description:
      'Colorful hills, historic trams, and stunning coastal views.',
  },

  {
    city: 'Berlin',
    country: 'Germany',
    image: '/images/destinations/berlin.avif',
    price: '$485',
    description:
      'Dynamic capital with rich history, vibrant arts scene, and modern culture.',
  },

  {
    city: 'Bangkok',
    country: 'Thailand',
    image: '/images/destinations/bangkok.avif',
    price: '$645',
    description:
      'Bustling metropolis with ornate temples, street food, and vibrant markets.',
  },

  {
    city: 'Venice',
    country: 'Italy',
    image: '/images/destinations/venice.avif',
    price: '$592',
    description:
      'Romantic canals, stunning architecture, and timeless Italian beauty.',
  },

  {
    city: 'Hong Kong',
    country: 'China',
    image: '/images/destinations/hongkong.avif',
    price: '$825',
    description:
      'Gleaming skyscrapers, bustling harbors, and a unique blend of East and West.',
  },

  {
    city: 'Stockholm',
    country: 'Sweden',
    image: '/images/destinations/stockholm.avif',
    price: '$598',
    description:
      'Scandinavian elegance spread across islands with rich cultural heritage.',
  },

  {
    city: 'Copenhagen',
    country: 'Denmark',
    image: '/images/destinations/copenhagen.avif',
    price: '$565',
    description:
      'Hygge capital with charming canals, colorful houses, and innovative design.',
  },

  {
    city: 'Dublin',
    country: 'Ireland',
    image: '/images/destinations/dublin.avif',
    price: '$495',
    description:
      'Literary heritage, lively pubs, and warm Irish hospitality.',
  },

  {
    city: 'Edinburgh',
    country: 'Scotland',
    image: '/images/destinations/edinburgh.avif',
    price: '$518',
    description:
      "Medieval old town, dramatic castle, and Scotland's cultural heart.",
  },

  {
    city: 'Reykjavik',
    country: 'Iceland',
    image: '/images/destinations/reykjavik.avif',
    price: '$685',
    description:
      'Gateway to Iceland’s natural wonders with vibrant culture and northern lights.',
  },

  {
    city: 'Oslo',
    country: 'Norway',
    image: '/images/destinations/oslo.avif',
    price: '$625',
    description:
      'Modern Scandinavian capital surrounded by fjords and forests.',
  },

  {
    city: 'Helsinki',
    country: 'Finland',
    image: '/images/destinations/helsinki.avif',
    price: '$592',
    description:
      'Design capital with Nordic charm and modern architecture.',
  },

  {
    city: 'Brussels',
    country: 'Belgium',
    image: '/images/destinations/brussels.avif',
    price: '$475',
    description:
      'European capital with grand architecture, chocolate, and Belgian waffles.',
  },

  {
    city: 'Zurich',
    country: 'Switzerland',
    image: '/images/destinations/zurich.avif',
    price: '$728',
    description:
      'Alpine elegance with pristine lakes, luxury shopping, and Swiss precision.',
  },

  {
    city: 'Madrid',
    country: 'Spain',
    image: '/images/destinations/madrid.avif',
    price: '$495',
    description:
      'Spain’s vibrant capital with world-class art museums and lively plazas.',
  },

  {
    city: 'San Francisco',
    country: 'United States',
    image: '/images/destinations/sanfrancisco.avif',
    price: '$425',
    description:
      'Iconic Golden Gate Bridge, tech innovation hub, and diverse neighborhoods.',
  },
]
const DestinationsScreen = () => {
  return (
    <Container className='py-5'>
      <div className='mb-5'>
        <h1 className='fw-bold'>Our destinations</h1>

        <p className='text-muted'>
          Explore amazing cities around the world
        </p>
      </div>

      <Row>
        {destinations.map((destination, index) => (
          <Col key={index} sm={12} md={6} lg={3} className='mb-4'>
            <Card className='destination-card border-0 shadow-sm h-100'>
              
              <Card.Img
                variant='top'
                src={destination.image}
                className='destination-image'
              />

              <Card.Body className='d-flex flex-column'>
                
                <h4 className='fw-bold'>
                  {destination.city}
                </h4>

                <p className='text-muted mb-2'>
                  {destination.country}
                </p>

                <p className='small text-muted flex-grow-1'>
                  {destination.description}
                </p>

                <div className='d-flex justify-content-between align-items-center mt-3'>
                  
                  <strong>
                    from {destination.price}
                  </strong>

                  <Button className='explore-btn'>
                    Explore →
                  </Button>

                </div>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default DestinationsScreen