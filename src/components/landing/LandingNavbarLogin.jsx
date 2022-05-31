import React, { Component , Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Container, Nav,Offcanvas,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import Logo from '../../assets/images/logo1.png';

 class LandingNavbarLogin extends Component {
  render() {
    return (
      <Fragment>
<Navbar bg="light" expand="lg" fixed="top" className="m-0 p-0 shadow-sm " style={{opacity:1}}>
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img
        src={Logo}
        width="80%"
        height="80%"
        className="d-inline-block align-top "
        alt="DANN"/>
      
      </Navbar.Brand>
      
    <Navbar.Brand className="me-5" style={{color:'#041E42'}} as={Link} to="/">Dann Business Park</Navbar.Brand>     
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto">
      <Button size="md" variant="outline-secondary" className="me-3"as={Link} to="/">For Business</Button>
        <Button size="md"  variant="outline-primary" className="me-3"as={Link} to="/login">Login</Button>
      <Button variant="primary" size="md" as={Link} to="/signup" >  Create an Account</Button>
        </Nav> 
    </Navbar.Collapse>
  </Container>
</Navbar>


      </Fragment>
    )
  }
}

export default LandingNavbarLogin