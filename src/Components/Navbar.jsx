import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" style={styles.brand}>
        <img
          src="/logo192.png"
          width="35"
          height="35"
          className="inline align-top"
          alt="React logo"
        />{' '}
        Dev-Opstacles
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Code</Nav.Link>
        <Nav.Link href="#home">Collaborate</Nav.Link>
        <Nav.Link href="#home">Complain</Nav.Link>
      </Nav>
      <div style={styles.profile}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="#343a40" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
      </div>
    </Navbar>
  )
}

const styles = {
  brand: {
    fontSize: '25px',
    padding: '10px'
  },
  profile: {
    border: 'solid 1px white',
    borderRadius: '50%',
    backgroundColor: 'white',
  }
}

export default NavBar;