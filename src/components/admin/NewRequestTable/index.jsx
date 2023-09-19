import React, {useState} from "react";
import { Table  } from "react-bootstrap";
import Offcanvas  from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button"


export const NewRequestTable = () => {

    const [showRequest, setShowRequest] = useState(false);
    const handleCloseRequest = ()=> setShowRequest(false);
    const handleShowRequest = () => setShowRequest(true);

    return (
        <Table striped>
            <thead>
            <tr>
                <th>#</th>
                <th colSpan={2}>Request</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Plumbing issue</td> 
                    <div className="d-flex justify-content-center align-items-end">
                        <Button className="" variant="primary" onClick={handleShowRequest}>
                            View
                        </Button>
                        </div>
                        <Offcanvas show={showRequest} onHide={handleCloseRequest}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Request</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Details of the request
                        </Offcanvas.Body>
                        <Button className="m-2">Accept</Button>
                        <Button className="m-2">Reject</Button>
                   
                        </Offcanvas>
                        
                    
                </tr>
              
                
            </tbody>
        </Table>
    )
}