import { Container, NavLink, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import './LandingNav.css';

const LandingNavbar = () => {
  return (
    <div>
      <Navbar className='login-container'  sticky='top'>
        <Container className='nav-container container'>
        <Navbar.Collapse>
            <Nav className='nav-link ml-auto'>
                <div className='row'>
                <h1 style={{textAlign:'center'}}>Study Tour</h1>
                <Nav.Link as={NavLink} activeClassName='active' href='#about-us'>About Us</Nav.Link>
                <Nav.Link as={NavLink} activeClassName='active' href='#services'>Sevices</Nav.Link>
                <Nav.Link as={NavLink} activeClassName='active' href='#contact-us'>Contact Us</Nav.Link>
                <div className='button-container'>
                <a href="/login">
                    <button type="button" varient='contained' className=' button'>Sign in</button>
                </a>
                <a href="/login">
                    <button type="button" varient='contained' className=' button' >Sign Up</button>
                </a>
                </div>
                </div>
            </Nav>
        </Navbar.Collapse>
          {/* <Navbar.Brand href='#home'>
            <img src="favicon.ico" alt="Ayoola-logo" style={{height:45}} />
          </Navbar.Brand>
           <Navbar.Toggle aria-controls='responsive-navbar-nav'/> */}
          {/* <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav id='me-auto'>
            </Nav> */}
            {/* <Nav className='nav-link ml-auto'>
              <Nav.Link as={NavLink} activeClassName='active' href='#about-us'>About Us</Nav.Link>
              <a className='nav-link' href="/login">
                <button varient='contained' >Sign In</button>
              </a>
              <a className='nav-link' href="/signup">
                <button varient='contained' >Sign Up</button>
              </a>
            </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default LandingNavbar;