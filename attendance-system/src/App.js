import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import AttendanceList from "./components/AttendanceList";
import Reports from "./components/Reports";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/register" className="nav-link">Register</NavLink>
          <NavLink to="/attendance-list" className="nav-link">Attendance</NavLink>
          <NavLink to="/employee-list" className="nav-link">Employee List</NavLink>
          <NavLink to="/reports" className="nav-link">Reports</NavLink>
          
        </nav>

        {/* Routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register employees={employees} setEmployees={setEmployees} />} />
            <Route path="/attendance-list" element={<AttendanceList employees={employees} setEmployees={setEmployees} />} />
            <Route path="/employee-list" element={<EmployeeList employees={employees} setEmployees={setEmployees} />} />
            <Route path="/reports" element={<Reports employees={employees} />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
