import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../slices/authSlice'

const SignInScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
const navigate = useNavigate()

  const submitHandler = (e) => {
  e.preventDefault()

  const fakeUser = {
    name: 'Kata',
    email,
  }

  localStorage.setItem('userInfo', JSON.stringify(fakeUser))

  dispatch(setCredentials(fakeUser))

  navigate('/')
}
  return (
    <div className='signin-page'>

      <div className='signin-left'>

        <div className='signin-left-content'>

          <FaSignInAlt className='signin-icon' />

          <h1>Welcome Back</h1>

          <p>
            Sign in to access your bookings and exclusive offers
          </p>

        </div>

      </div>

      <div className='signin-right'>

        <div className='signin-box'>

          <h2>Sign In</h2>

          <p className='signin-subtitle'>
            Access your account to manage bookings and preferences
          </p>

          <Form onSubmit={submitHandler} className='signin-form'>

            <Form.Group className='mb-3' controlId='email'>

              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>

              <Form.Label>Password</Form.Label>

              <Form.Control
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </Form.Group>

          <div className='d-flex justify-content-between align-items-center mb-4'>

  <Form.Check
    type='checkbox'
    id='rememberMe'
    label='Remember me'
    className='remember-check'
  />

  <a href='#' className='forgot-link'>
    Forgot password?
  </a>

</div>

            <Button
              type='submit'
              className='signin-btn-large'
            >
              Sign In
            </Button>

          </Form>

          <Row className='mt-4'>
            <Col className='text-center'>

              Don&apos;t have an account?{' '}

             <Link to='/register'>
  Create an account
</Link>

            </Col>
          </Row>

        </div>

      </div>

    </div>
  )
}

export default SignInScreen