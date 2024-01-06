import React, { useState } from "react";
import { Nav, Container } from "react-bootstrap";
import { NewRequestTable  } from "../NewRequestTable";
import { ApprovedRequestsTable } from "../ApprovedRequestsTable";
import { InProgressRequests } from "../InProgressRequests";
import { RejectedRequests } from "../RejectedRequests";
import { PendingRequests } from "../PendingRequests";


export const Dashboard = () => {
    const [navKey, setNavKey] = useState(0);
   


    return (
        <Container>
           <Nav variant="tabs" defaultActiveKey={0} activeKey={navKey}>
                <Nav.Item key={0}>
                    <Nav.Link eventKey={0} onClick={() => setNavKey(0)}>All Requests</Nav.Link>
                </Nav.Item>
                <Nav.Item key={0}>
                    <Nav.Link eventKey={1} onClick={() => setNavKey(1)}>Pending Requests</Nav.Link>
                </Nav.Item>
                <Nav.Item key={1}>
                    <Nav.Link eventKey={2} onClick={() => setNavKey(2)}>In Progress</Nav.Link>
                </Nav.Item>
                <Nav.Item key={2}>
                    <Nav.Link eventKey={3} onClick={() => setNavKey(3)}>Rejected Request</Nav.Link>
                </Nav.Item>
                <Nav.Item key={3}>
                    <Nav.Link eventKey={4}onClick={() => setNavKey(4)}>Completed Request</Nav.Link>
                </Nav.Item>
            </Nav>

            { navKey == 0 && <NewRequestTable /> }
            { navKey == 1 && <PendingRequests />}
            { navKey == 2 && <InProgressRequests /> }
            { navKey == 3 && <RejectedRequests />}
            { navKey == 4 && <ApprovedRequestsTable />}
        </Container>
    );
}