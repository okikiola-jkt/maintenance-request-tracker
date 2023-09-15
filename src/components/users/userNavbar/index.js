import React from "react";
import { Navbar as uNavbar, Container} from 'react-bootstrap';



export const Navbar = () => {
    return (
        <useNavbar className="bg-body-tertiary">
        <Container >
            <uNavbar.Brand href="#home">User Dashboard</uNavbar.Brand>
            <uNavbar.Toggle />
                <uNavbar.Collapse className="justify-content-end">
                    <uNavbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </uNavbar.Text>
                </uNavbar.Collapse>
        </Container>
    </useNavbar>
    );
};
