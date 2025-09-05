import Navbar from './Navbar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function EmployeeDashboard() {
  const [users, setUsers] = useState([]);

  const fetchEmpData = () => {
    axios.get("http://localhost:8080/api/employees/all")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Fetch Error:", error));
  };

  useEffect(() => {
    fetchEmpData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Employee Dashboard</h1>

      <h3>Employee Table</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user) => (
            <tr key={user.eid}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contactno}</td>
              <td>{user.department}</td>
              <td>{user.role}</td>
              <td>{user.salary}</td>
              <td>{user.img && <img src={user.img} width="50" alt="emp" onError={(e) => e.target.style.display = 'none'} />}</td>
            </tr>
          )) : (
            <tr><td colSpan="7" className="text-center">No Employees Found</td></tr>
          )}
        </tbody>
      </table>

      <h3 className="mt-5">Employee Cards</h3>
      <div className="row">
        {users.map((u) => (
          <div className="col-md-4 mb-4" key={u.eid}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={u.img} className="card-img-top" alt="emp" onError={(e) => e.target.style.display = 'none'} />
              <div className="card-body">
                <h5 className="card-title">{u.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {u.email}<br />
                  <strong>Department:</strong> {u.department}<br />
                  <strong>Contact:</strong> {u.contactno}<br />
                  <strong>Role:</strong> {u.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

