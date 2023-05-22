import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

function Menu({settext, setstars}) {

  return (
    <div >
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#" style={{color:'red'}}><img src='logo.png' width={'60px'} height={'80px'} alt=''/> Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <ReactStars style={{marginRight:'20px'}}
    count={5}
    size={24}
    activeColor="red"
    onChange={(newRating) => setstars(newRating)}
  />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value)}
            />
            <Button variant="danger" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu