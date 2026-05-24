import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'

import './assets/styles/bootstrap-custom.css'
import './assets/styles/index.css'

const App = () => {
  return (
    <>
      <Header />

      <main className='py-3'>
        <Container fluid className='p-0'>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App