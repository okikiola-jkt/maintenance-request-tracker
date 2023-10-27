import React from "react";
import { Navbar as uNavbar, Container, Nav, Col, Row} from 'react-bootstrap';


export const Navbar = () => {
    let userToken = localStorage.getItem('userToken');

    return (

        <uNavbar expand="lg" className="bg-body-tertiary">
            <Container className="my-4">
            <Row>
                <Col className="align-items-center">
                    <uNavbar.Brand href="#home">Maintenance Request</uNavbar.Brand>
                </Col>
                {userToken && (
                <Col className="d-flex justify-content-end align-items-center">
                    <uNavbar.Brand href="/user-login" onClick={() => {
                            localStorage.removeItem('userToken');
                        }
                        }
                    >
                        Log out
                    </uNavbar.Brand>
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
