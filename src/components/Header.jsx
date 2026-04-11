import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import { FaPlaneDeparture, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container fluid>

          {/* LOGO */}
          <LinkContainer to="/">
            <Navbar.Brand>
              <FaPlaneDeparture className="me-2" />
              SkyWings Airlines
            </Navbar.Brand>
          </LinkContainer>

          {/* TOGGLE (hamburger) */}
          <Navbar.Toggle />

          {/* NAVBAR CONTENT */}
          <Navbar.Collapse>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
              <Nav.Link>About</Nav.Link>

              <NavDropdown title="Dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* SEARCH */}
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" />
              <Button variant="secondary">Search</Button>
            </Form>

            {/* LOGIN */}
            <Nav className="ms-3">
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser className="me-1" /> Prijava
                </Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header