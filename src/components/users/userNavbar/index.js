import React from "react";
import { Navbar as uNavbar, Container, Nav, Col, Row} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';




export const Navbar = () => {
    const location = useLocation();
    const userDashboardPage = location.pathname === '/user-dashboard';

    return (

        <uNavbar expand="lg" className="bg-body-tertiary">
            <Container className="my-4">
            <Row>
                <Col className="align-items-center">
                    <uNavbar.Brand href="#home">Maintenance Request</uNavbar.Brand>
                </Col>
                {userDashboardPage && (
                <Col className="d-flex justify-content-end align-items-center">
                    <uNavbar.Brand href="/user-login">Log out</uNavbar.Brand>
                </Col>
                )}
                </Row>

                <uNavbar.Toggle aria-controls="basic-navbar-nav" />
                <uNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                 
                </Nav>
                </uNavbar.Collapse>
            </Container>
        </uNavbar>
    );
};
