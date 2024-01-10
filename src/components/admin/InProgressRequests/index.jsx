import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useAdminGetAllRequests } from "../../../hooks/mutations/useAdminGetAllRequests";
import { RequestRow } from "./RequestRow";
import { useChangeRequestStatus } from "../../../hooks/mutations/useChangeRequestStatus";
import toast from "react-hot-toast";


export const InProgressRequests = () => {
  const [showRequest, setShowRequest] = useState(false);
  const [currentRequest, setCurrentRequest] = useState({});
  const { mutate: changeStatus} = useChangeRequestStatus();

  const handleChangeRequest = (id, status) => {
    changeStatus({ id, status }, {
      onSuccess: () => {
        toast.success('request updated Successful!');
      },
      onError: (error) => {
        toast.error('Failed to update request.');
      },
    });
  } 

  const handleCloseRequest = ()=> {
    setShowRequest(false);
    setCurrentRequest({});
}
  const handleShowRequest = (request) => {
    setShowRequest(true)      
    setCurrentRequest(request)        
}

  const { data, refetch } = useAdminGetAllRequests("in-progress");

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
          <RequestRow
            key={request.id}
            request={request}
            index={index}
            showRequest={showRequest}
            handleCloseRequest={handleCloseRequest}
            handleShowRequest={handleShowRequest}
            handleChangeRequest={handleChangeRequest}
            currentRequest={currentRequest}
          />
        ))}
      </tbody>
    </Table>
  );
};
