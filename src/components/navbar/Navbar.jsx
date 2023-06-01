import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css"; // Import the CSS file
import resume from "../../assets/Renjith_Rajakumar_Resume.ff.pdf";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" >
      <Container className="d-flex">
        <Navbar.Brand href="#home" className="text-white">Renjith Rajakumar</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">     <FontAwesomeIcon icon={faBars} flip size="2xl" style={{color: "#ffffff",}} /></Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
   

          <Nav>
            <Nav.Link href="#" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#project" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#experience" className="nav-link">Experience</Nav.Link>
            <Nav.Link href={resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

