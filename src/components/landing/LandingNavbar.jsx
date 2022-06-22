import React, { Component, Fragment } from 'react'

import {Link} from 'react-router-dom'
import {Navbar,Container, Nav,Offcanvas,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import Logo from '../../assets/images/logo1.png';

 class LandingNavbar extends Component {
  render() {
    return (
      <Fragment>

<Navbar bg="light" expand="lg" fixed="top" className="m-0 p-0 shadow-sm " style={{opacity:0.9}}>
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img
        src={Logo}
        width="80%"
        height="80%"
        className="d-inline-block align-top "
        alt="DANN"/>
      </Navbar.Brand>
    <Navbar.Brand className="me-5 dannBrand" style={{color:'#041E42'}}as={Link} to="/">Dann Business Park</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      {/* <Nav className="me-auto" navbarScroll>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/">About</Nav.Link>
        <Nav.Link as={Link} to="/">Services</Nav.Link>
        <Nav.Link as={Link} to="/">Download</Nav.Link>
        <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
     
    
      </Nav> */}

      {/* <Navbar.Text> */}
        <Nav className="ms-auto">
      <Button size="md" variant="outline-secondary" className="me-3" as={Link} to="/signup">For Business</Button>
        <Button size="md"  variant="outline-primary" className="me-3" as={Link} to="/login">Login</Button>
        <Button variant="primary" size="md" className="rounded" as={Link} to="/signup">Create an Account</Button>
        </Nav>
      {/* </Navbar.Text> */}

    </Navbar.Collapse>
  </Container>
</Navbar>

  {/* {['md'].map((expand) => (
    <Navbar key={expand} bg="light" fixed="top" expand={expand}
     className="mb-3 m-0 p-0" style={{opacity:0.9}}>
      <Container fluid>
      <Navbar.Brand href="#home">
      <img
        src={Logo}
        width="80%"
        height="80%"
        className="d-inline-block align-top "
        alt="DANN"/>
      </Navbar.Brand>
      <Navbar.Brand href="#home" className="me-5">Dann Business Park</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Dann Business Park
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
              
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>   ))}*/}
        
      </Fragment>
    )
  }
}

export default LandingNavbar