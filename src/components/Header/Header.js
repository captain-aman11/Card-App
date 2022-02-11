import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Header() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink to="/" style={styles.navLink}>
          <Navbar.Brand>Cards-App</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user && (
              <>
                <NavLink style={styles.navLink} to="#">
                  Welcome, {user.name}
                </NavLink>
                <NavLink style={styles.navLink} to="/savedcards">
                  Saved Cards
                </NavLink>
                <NavLink style={styles.navLink} to="/logout">
                  Logout
                </NavLink>
              </>
            )}
            {!user && (
              <>
                <NavLink style={styles.navLink} to="/login">
                  Login
                </NavLink>
                <NavLink style={styles.navLink} to="/register">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  navLink: {
    color: "black",
    textDecoration: "none",
    margin: "0 8px",
  },
};

export default Header;
