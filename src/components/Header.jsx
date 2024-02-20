import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux"

function Header() {
const wishlist=useSelector((state)=>state.wishlistReducer)
const cart=useSelector((state)=>state.cartReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-dark text-light position-fixed top-0 w-100" style={{zIndex:1}}>
        <Container>
          <Navbar.Brand>
            <NavLink to={'/'} style={{ color: 'light', fontWeight: 'bold', textDecoration: 'none' }}>
              <i className="fa-solid fa-cart-shopping fa-bounce "></i>E-cart
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-light">
              <Nav.Link>
                <NavLink to={'/wishlist'} style={{ color: 'light', fontWeight: 'bold', textDecoration: 'none' }}>
                  <i className="fa-solid fa-truck-fast fa-bounce me-2"></i>wishlist <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={'/cart'} style={{ color: 'light', fontWeight: 'bold', textDecoration: 'none' }}>
                  <i className="fa-solid fa-truck-fast fa-bounce me-2"></i>cart <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge>
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
