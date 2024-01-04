import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "../../../components/admin/navbar";
import { Dashboard } from "../../../components/admin/dashboard";
import './index.css';


function AdminDashboard() {
  return (
    <div>
      <Navbar className="navbar-transparent" />

      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default AdminDashboard;
