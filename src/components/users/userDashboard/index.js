import React , {useState}from "react";
import { Nav, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';
import toast from 'react-hot-toast';
import { useNewUserRequest } from "../../../hooks/mutations/useNewUserRequest";
import { useGetAllUserRequests } from "../../../hooks/mutations/useGetAllUserRequests";
import { useDeleteRequest } from "../../../hooks/mutations/userDeleteRequest";

export const UserDashboard2 = () => {
    const [requestData, setRequestData] = useState({
        details: '',
      });
    const [navKey, setNavKey] = useState(0);
    const [currentRequest, setCurrentRequest] = useState({});
    const [addRequest, setAddRequest] = useState([]);
    const [showRequest, setShowRequest] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const { mutate: callNewRequest } = useNewUserRequest();
    const { data, refetch } = useGetAllUserRequests();
    const { mutate: deleteRequest} = useDeleteRequest();

    const handleClose = ()=> setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseRequest = ()=> {
        setShowRequest(false);
        setCurrentRequest({});
    }
    const handleShowRequest = (request) => {
        setShowRequest(true)      
        setCurrentRequest(request)        
    }
    const handleRequestInputChange = (event) => {
        const { name, value } = event.target;
    
            setRequestData({
             ...requestData,
            [name]: value
            });
         }
    const newUserRequest = async (event) => {
        try {
          event.preventDefault();
          setLoading(true);
    
          callNewRequest(requestData, {
            onSuccess: (data) => {
              toast.success('Succesfullly added request');
              setLoading(false);
            },
            onError: (error) => {
            const errorMessage = error.response?.data?.message || 'An error occurred';
              toast.error(errorMessage);
              setLoading(false);
            }
          });
    
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
            toast.error(errorMessage);
            setLoading(false);
        }
      };

      const deleteUserRequest = async (userId) => {
        try {
            setLoading(true);
    
            await deleteRequest(userId, {
                onSuccess: () => {
                    toast.success('Succesfully deleted request');
                    setLoading(false);
                    refetch();
                }, onError: (error) => {
                    const errorMessage = error.response?.data?.message || 'An error occurred';
                      toast.error(errorMessage);
                      setLoading(false);
                    }
            });
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
            toast.error(errorMessage);
            setLoading(false);
        }
    }
    

    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey={0} activeKey={navKey}>
                <Nav.Item key={0}>
                    <Nav.Link eventKey={0} onClick={() => setNavKey(0)}>In-Progress</Nav.Link>
                </Nav.Item>
                <Nav.Item key={1}>
                    <Nav.Link eventKey={1} onClick={() => setNavKey(1)}>Accepted Request</Nav.Link>
                </Nav.Item>
                <Nav.Item key={2}>
                    <Nav.Link eventKey={2} onClick={() => setNavKey(2)}>Rejected Request</Nav.Link>
                </Nav.Item>
                <Nav.Item key={3}>
                    <Nav.Link eventKey={3}onClick={() => setNavKey(3)}>Completed Request</Nav.Link>
                </Nav.Item>
            </Nav>

            {navKey === 0 && (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            
                            <tr>
                                <th>ID.</th>
                                <th>Request</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.map((request, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{request.details}</td>
                                    
                                    <div className=" d-flex justify-content-center ">
                                    
                                    <Button className="" variant="primary" onClick={ () => handleShowRequest(request)}>
                                        View
                                    </Button>
                                    <Button className="bg-danger text-white ms-2" variant="red" onClick={ () => deleteUserRequest(request.id)}>
                                        X
                                    </Button>
                                    </div>
                                    
                                    <Offcanvas key={index}
                                        show={showRequest} 
                                        onHide={handleCloseRequest}
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Request</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <div>{currentRequest?.details}</div>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                
                                </tr>
                            ))}
                    
                        </tbody>

                      
                    </Table>
                <div className="d-flex justify-content-center align-items-end">
                    <Button variant="primary" onClick={handleShow}>
                        Add Request
                    </Button>
                </div>
                   
                </div>
            )}

            {navKey === 1 && (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            
                            <tr>
                                <th>ID.</th>
                                <th>Request</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {data?.items?.map((request, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    
                                    <div className="d-flex justify-content-center align-items-end">
                                    <Button className="" variant="primary" onClick={handleShowRequest}>
                                        View
                                    </Button>
                                    <Offcanvas show={showRequest} onHide={handleCloseRequest}>
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Request</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div>{request}</div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                                </div>
                                </tr>
                            ))}
                    
                        </tbody>
                      
                    </Table>
                   
                </div>
            )}  

            {navKey === 2 && (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            
                            <tr>
                                <th>ID.</th>
                                <th>Request</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {data?.items?.map((request, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    
                                    <div className="d-flex justify-content-center align-items-end">
                                    <Button className="" variant="primary" onClick={handleShowRequest}>
                                        View
                                    </Button>
                                    <Offcanvas show={showRequest} onHide={handleCloseRequest}>
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Request</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div>{request}</div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                                </div>
                                </tr>
                            ))}
                    
                        </tbody>
                      
                    </Table>
                   
                </div>
            )}  

            {navKey === 3 && (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            
                            <tr>
                                <th>ID.</th>
                                <th>Request</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {data?.items?.map((request, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    
                                    <div className="d-flex justify-content-center align-items-end">
                                    <Button className="" variant="primary" onClick={handleShowRequest}>
                                        View
                                    </Button>
                                    <Offcanvas show={showRequest} onHide={handleCloseRequest}>
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Request</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div>{request}</div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                                </div>
                                </tr>
                            ))}
                    
                        </tbody>
                      
                    </Table>
                   
                </div>
            )}  

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>New Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3}  onChange={handleRequestInputChange} name='details'/>
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                
                    <Button onClick={(event) => {
                        const textareaContent = document.getElementById("exampleForm.ControlTextarea1").value;
                        setAddRequest((prevRequests) => [...prevRequests, textareaContent]);
                        handleClose();
                        newUserRequest(event);
                    }}>Create!</Button>
                </Modal.Footer>
            </Modal> 
        </Container>
    )
}

export default UserDashboard2