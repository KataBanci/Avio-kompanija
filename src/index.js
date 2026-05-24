import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import App from './App'
import HomeScreen from './screens/HomeScreen'
import FlightsScreen from './screens/FlightsScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import SignInScreen from './screens/SignInScreen'
import DestinationsScreen from './screens/DestinationsScreen'

import './assets/styles/bootstrap-custom.css'
import './assets/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
  <Route index element={<HomeScreen />} />
  <Route path='flights' element={<FlightsScreen />} />
  <Route path='about' element={<AboutScreen />} />
  <Route path='contact' element={<ContactScreen />} />
  <Route path='signin' element={<SignInScreen />} />
  <Route path='destinations' element={<DestinationsScreen />} />
</Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)