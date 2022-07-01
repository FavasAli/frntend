import React from "react"
import { Navbar, Container ,Nav} from "react-bootstrap"

const Header = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' >
        <Container >
          <Navbar.Brand href='#home'style={{"color":"white"}}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/register' style={{"color":"white"}}>Register</Nav.Link>
              <Nav.Link href='/login' style={{"color":"white"}}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
