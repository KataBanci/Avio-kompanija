import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className='custom-navbar' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand'>
              <img src='/images/logo.png' alt='AirVista' className='logo' />
              <span>AirVista</span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto nav-links'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/flights'>
                <Nav.Link>Flights</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/destinations'>
                <Nav.Link>Destinations</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/signin'>
                <Nav.Link className='signin-nav-btn'>
                  Sign In
                </Nav.Link>
              </LinkContainer>

            

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;