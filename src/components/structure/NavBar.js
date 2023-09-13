import React, { useState } from 'react'
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavBar() {

  const cartProducts = useSelector(state=>state.cart)

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavbarBrand >Wardrobe</NavbarBrand>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link to='/' as={Link} >Product</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <Nav.Link to='/cart' as={Link} >My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
  
}

export default NavBar