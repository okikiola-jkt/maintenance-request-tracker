import React from "react";
import { Navbar as BNavbar, Container, Nav} from 'react-bootstrap';


export const Navbar = () => {
    return (
        <BNavbar expand="lg" className="bg-body-tertiary">
            <Container>
                <BNavbar.Brand href="#home">Maintenance Request</BNavbar.Brand>

                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                 
                </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    );
}