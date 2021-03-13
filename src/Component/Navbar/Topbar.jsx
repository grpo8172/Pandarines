import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../Assets/logo_side.png";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="/">
            <img style={{ width: "20rem" }} src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link
                style={{ color: "black", fontSize: "20px", marginRight: 20 }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{ color: "black", fontSize: "20px" }}
                eventKey={2}
                to="/blog"
              >
                Blog
              </Link>
            </Nav>
            <Nav>
            <Link
                style={{ color: "black", background: "#efb372",
                padding: 10,
                borderRadius: 20,
                boxShadow: "2px 3px #888888", fontSize: "14px", marginRight: 20 }}
                to="/Admin"
              >
                Admin Portal
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
