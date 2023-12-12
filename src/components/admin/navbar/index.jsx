import React from "react";
import { Navbar as BNavbar, Container, Nav, Col, Row } from 'react-bootstrap';
import { useAdminGetAllUsers } from "../../../hooks/mutations/useGetAllUsers";
import Button from "react-bootstrap/Button";

export const Navbar = () => {
  const { data, refetch } = useAdminGetAllUsers();
  const handleActiveUsersClick = () => {
    refetch();
  };

  let adminToken = localStorage.getItem('adminToken');

  return (
    <BNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="w-100">
          <Col xs={6} className="align-items-center">
            <BNavbar.Brand href="#home">Maintenance Request</BNavbar.Brand>
          </Col>
          <Col xs={3} className="d-flex justify-content-end align-items-center">
            <Button variant="primary" onClick={handleActiveUsersClick}>
              Active Users
            </Button>
          </Col>
          {adminToken && (
            <Col xs={3} className="d-flex justify-content-end align-items-center">
              <BNavbar.Brand
                href="/admin-login"
                onClick={() => {
                  localStorage.removeItem('adminToken');
                }}
              >
                Log out
              </BNavbar.Brand>
            </Col>
          )}
        </Row>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};
