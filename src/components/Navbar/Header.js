import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark">
        <Navbar.Brand href="/" className="brand-name">
          SpaceX
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
