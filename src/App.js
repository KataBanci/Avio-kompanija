import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import BookingDetailsScreen from './screens/BookingDetailsScreen'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route path='/' element={<HomeScreen />} />
          <Route path='/signin' element={<SignInScreen />} />
          <Route path='/register' element={<RegisterScreen />} />

          {/* PRIVATE ROUTES */}
          <Route path='' element={<PrivateRoute />}>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/booking/:id' element={<BookingDetailsScreen />} />
          </Route>

        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App