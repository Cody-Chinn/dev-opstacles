import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" style={styles.brand}>
        <img
          src="/logo192.png"
          width="40"
          height="40"
          className="inline align-top"
          alt="React logo"
        />{' '}
        Dev-Opstacles
      </Navbar.Brand>
    </Navbar>
  )
}

const styles = {
  brand: {
    fontSize: '25px',
    padding: '10px'
  }
}

export default NavBar;