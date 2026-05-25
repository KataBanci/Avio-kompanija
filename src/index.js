import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './assets/styles/bootstrap-custom.css'
import './assets/styles/index.css'
import App from './App'
import HomeScreen from './screens/HomeScreen'
import FlightsScreen from './screens/FlightsScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import SignInScreen from './screens/SignInScreen'
import DestinationsScreen from './screens/DestinationsScreen'
import RegisterScreen from './screens/RegisterScreen'
import DestinationDetailsScreen from './screens/DestinationDetailsScreen'
import ProfileScreen from './screens/ProfileScreen'




const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
  <Route index element={<HomeScreen />} />
  <Route path='flights' element={<FlightsScreen />} />
  <Route path='about' element={<AboutScreen />} />
  <Route path='contact' element={<ContactScreen />} />
  <Route path='signin' element={<SignInScreen />} />
  <Route path='destinations' element={<DestinationsScreen />} />
  <Route path='register' element={<RegisterScreen />} />
  <Route path='destinations/:city' element={<DestinationDetailsScreen />} />
  <Route path='profile' element={<ProfileScreen />} />
</Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
)