import React , {useState}from "react";
import { Nav, Container, NavItem } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';



export const UserDashboard2 = () => {
    const [navKey, setNavKey] = useState(0);
    const [addRequest, setAddRequest] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey={0} activeKey={navKey}>
                <Nav.Item key={0}>
                    <Nav.Link eventKey={0} onClick={() => setNavKey(0)}>New Request</Nav.Link>
                </Nav.Item>
                <Nav.Item key={1}>
                    <Nav.Link eventKey={1} onClick={() => setNavKey(1)}>Completed Request</Nav.Link>
                </Nav.Item>
            </Nav>

            {navKey === 0 && (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addRequest.map((request, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{request}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
            { navKey == 1 && <p>Completed</p> }

            <div className="d-flex justify-content-center align-items-end">
            <Button variant="primary" onClick={handleShow}>
                Add Request
            </Button>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>New Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        const textareaContent = document.getElementById("exampleForm.ControlTextarea1").value;
                        setAddRequest((prevRequests) => [...prevRequests, textareaContent]);
                        handleClose();
                    }}>Create!</Button>
                </Modal.Footer>
            </Modal>
           
           
        </Container>
    )
}