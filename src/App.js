import React from "react";
import Login from "./pages/Admin/Login";
import Signupsignin from "./pages/Users/Signupsignin";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Request from "./pages/Users/request";


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element = {<Login />}/>
        <Route path="/user" element = {<Signupsignin />}/>
        <Route path="/request" element = {<Request />}/>
      </Routes>

    </Router>
    
      
    </div>
  );
}

export default App;
