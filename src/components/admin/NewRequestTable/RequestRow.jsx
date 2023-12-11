import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

export const RequestRow = ({
    request, index, handleShowRequest, handleCloseRequest,
    handleChangeRequest, currentRequest, showRequest
}) => {

    return (
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
              <Button className="m-2" onClick={() => handleChangeRequest(currentRequest.id, 'in-progress')}>Accept</Button>
              <Button className="m-2">Reject</Button>
            </Offcanvas>
          </tr>
        </>
    );
}
