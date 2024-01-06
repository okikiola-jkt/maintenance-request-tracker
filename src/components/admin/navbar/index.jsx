import React, { useState } from "react";
import { Navbar as BNavbar, Container, Nav, Col, Row } from "react-bootstrap";
import { useAdminGetAllUsers } from "../../../hooks/mutations/useGetAllUsers";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import './index.css';

export const Navbar = () => {
  const { data, refetch } = useAdminGetAllUsers();
  const [showModal, setShowModal] = useState(false);
  const [activeUsers, setActiveUsers] = useState(null);

  const handleActiveUsersClick = async () => {
    try {
      await refetch();

      setActiveUsers(data?.data);
      setShowModal(true);
    } catch (error) {}
  };

  let adminToken = localStorage.getItem("adminToken");

  return (
    <BNavbar expand="lg" className="adminNavbar">
      <Container>
      <div className=" w-100 mt-4 mb-4">
        <Row>
          <Col xs={6} className="align-items-center">
            <BNavbar.Brand href="#home">Maintenance Request</BNavbar.Brand>
          </Col>
          {adminToken && (
            <>
            <Col xs={3} className="d-flex justify-content-end align-items-center">
            <Button className="me-2" onClick={handleActiveUsersClick}>
              Active Users
            </Button>
          </Col>
            <Col
              xs={3}
              className="d-flex justify-content-end align-items-center"
            >
              <BNavbar.Brand
                href="/admin-login"
                onClick={() => {
                  localStorage.removeItem("adminToken");
                }}
              >
                Log out
              </BNavbar.Brand>
            </Col>
            </>
          )}
        </Row>
        </div>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </BNavbar.Collapse>
      </Container>
      <Modal
        show={showModal}
        fullscreen={true}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Active Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {activeUsers &&
                activeUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </BNavbar>
  );
};
