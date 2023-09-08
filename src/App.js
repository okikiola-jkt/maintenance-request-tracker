import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import UserDashboard from "./pages/Users/UserDashboard/";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserLogin from "./pages/Users/UserLogin";
import AdminLogin from "./pages/Admin/AdminLogin";


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/user-login" element = {<UserLogin />}/>
        <Route path="/admin-login" element = {<AdminLogin />}/>

        <Route path="/user-dashboard" element = {<UserDashboard />}/>
        <Route path="/admin-dashboard" element = {<AdminDashboard/>}/>
      </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
