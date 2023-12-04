import React, { useState } from "react";
import { Nav, Container } from "react-bootstrap";
import { NewRequestTable  } from "../NewRequestTable";


export const Dashboard = () => {
    const [navKey, setNavKey] = useState(0);
   


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

            { navKey == 0 && <NewRequestTable /> }
            { navKey == 1 && <p>In-Progress table content</p> }
            { navKey == 2 && <p>Completed table content</p> }
            { navKey == 3 && <p>Rejected table content</p> }
        </Container>
    );
}