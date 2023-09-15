import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import UserDashboard from "./pages/Users/UserDashboard/";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserLogin from "./pages/Users/UserLogin";
import AdminLogin from "./pages/Admin/AdminLogin";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        {/* user routes */}
        <Route path="/user-login" element = {<UserLogin />}/>
        <Route path="/user-dashboard" element = {<UserDashboard />}/>

        {/* admin routes */}
        <Route path="/admin-login" element = {<AdminLogin />}/>
        <Route path="/admin-dashboard" element = {<AdminDashboard/>}/>
      </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
