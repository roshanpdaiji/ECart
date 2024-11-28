import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Badge, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../Redux/slice/productSlice';
import { Link } from 'react-router-dom';



function Header({insideHome}) {



  const dispatch = useDispatch()

  //to get count on wishlist
  const[wishlistCount,setWishlistCount]=useState(0)
  const [cartCount,setCartCount]=useState(0)
  const {wishlist} = useSelector(state=>state.wishListReducer)
  const cart = useSelector((state)=>state.cartReducer)



  useEffect(()=>{
    setWishlistCount(wishlist.length)
    setCartCount(cart.length)
  },[wishlist,cart])



  
  return (
    <>
      <Navbar expand="lg" className="bg-info">
        <Container>
          {/* Logo with GIF */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="https://www.kemet.com/content/dam/kemet/lightning/images/category-icons/Distributor.png"
              alt="Delivery Truck"
              style={{ width: '50px', height: '30px', marginRight: '10px' }}
            />
            E-Cart
          </Navbar.Brand>
          {/* Toggle for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Links */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="#fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item href="#groceries">Groceries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#all-categories">All Categories</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* Search Bar */}

          {insideHome&&  <Form className="d-flex me-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
              />
              <Button variant="outline-light">Search</Button>
            </Form>}

            {/* Wishlist and Cart Links */}
            <Nav>
              {/* Wishlist Link */}
              <Nav className="me-auto">
                  <Link to="/wishlist" className="d-flex align-items-center" style={{fontWeight: 'bold', textDecoration: 'none', color: 'black'}}>
                   <i className="fa-solid fa-heart text-danger p-1"></i>{' '}
                       Wishlist<Badge bg="success rounded ms-2" className="ms-1">{wishlistCount}</Badge>
                 </Link>
                  <Link to="/cart" className="d-flex align-items-center ms-3" style={{fontWeight: 'bold', textDecoration: 'none', color: 'black'}}>
                       Cart <Badge bg="success rounded ms-2" className="ms-1">{cartCount}</Badge>
                 </Link>
                </Nav>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
