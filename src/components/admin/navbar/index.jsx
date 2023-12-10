import React from "react";
import { Navbar as BNavbar, Container, Nav, Col, Row} from 'react-bootstrap';



export const Navbar = () => {
    let adminToken = localStorage.getItem('adminToken');
    return (
        <BNavbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Row> 
                <Col className="align-items-center">
                <BNavbar.Brand href="#home">Maintenance Request</BNavbar.Brand>
                </Col>
                {adminToken && (
                <Col className="d-flex justify-content-end  align-items-center">
                    <BNavbar.Brand href="/admin-login" onClick={() => {
                            localStorage.removeItem('adminToken');
                        }
                        }
                    >
                        Log out
                    </BNavbar.Brand>
                </Col>   
                )}

                <Col>
                Active Users
                </Col>
                 </Row>
                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                 
                </Nav>
                </BNavbar.Collapse>
               
            </Container>
        </BNavbar>
    );
}