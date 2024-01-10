import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useAdminGetAllRequests } from "../../../hooks/mutations/useAdminGetAllRequests";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";


export const PendingRequests = () => {
  const [showRequest, setShowRequest] = useState(false);
  const [currentRequest, setCurrentRequest] = useState({});


 

  const handleCloseRequest = ()=> {
    setShowRequest(false);
    setCurrentRequest({});
}
  const handleShowRequest = (request) => {
    setShowRequest(true)      
    setCurrentRequest(request)        
}

  const { data, refetch } = useAdminGetAllRequests();

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th colSpan={2}>Request</th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((request, index) => (
          <>
          <tr>
          <td>{index + 1}</td>
          <td>{request.details}</td>

          <div className="d-flex justify-content-center align-items-end">
            <Button
              className=""
              variant="primary"
              onClick={() => handleShowRequest(request)}
            >
              View
            </Button>
          </div>
          <Offcanvas show={showRequest} onHide={handleCloseRequest}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Request</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div>{currentRequest?.details}</div>
            </Offcanvas.Body>
          </Offcanvas>
        </tr>
      </>
        ))}
      </tbody>
    </Table>
  );
};
