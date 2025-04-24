import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logout } from '../actions/userActions'

import React from "react";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin || {};

  console.log("User Info:", userInfo);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            ProShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>

              {userInfo ? (
                <Nav>
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
