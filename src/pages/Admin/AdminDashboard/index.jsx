import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "../../../components/admin/navbar";
import { Dashboard } from "../../../components/admin/dashboard";


function AdminDashboard() {
  return (
    <div>
      <Navbar />

      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default AdminDashboard;
