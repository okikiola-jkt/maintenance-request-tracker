import React from "react";
import { Table  } from "react-bootstrap";


export const NewRequestTable = () => {
    return (
        <Table striped>
            <thead>
            <tr>
                <th>#</th>
                <th colSpan={2}></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Plumbing issue</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Electrical problem</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Garage malfunction</td>
                </tr>
            </tbody>
        </Table>
    )
}