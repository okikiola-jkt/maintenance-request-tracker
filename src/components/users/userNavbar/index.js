import React from "react";
import { Navbar as uNavbar, Container, Nav} from 'react-bootstrap';



export const Navbar = () => {
    return (

        <uNavbar expand="lg" className="bg-body-tertiary">
            <Container className="my-4">
                <uNavbar.Brand href="#home">Maintenance Request</uNavbar.Brand>

                <uNavbar.Toggle aria-controls="basic-navbar-nav" />
                <uNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                 
                </Nav>
                </uNavbar.Collapse>
            </Container>
        </uNavbar>
    );
};
