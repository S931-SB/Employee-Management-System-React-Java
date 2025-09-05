import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // Only used during registration
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password
      });

      if (res.data === "Invalid email or password") {
        setMessage(res.data);
      } else {
        setMessage("Login successful!");
        const userRole = res.data.role;

        if (userRole === "admin") {
          navigate("/register-employee");
        } else if (userRole === "employee") {
          navigate("/employee-dashboard");
        } else {
          setMessage("Unknown role!");
        }
      }
    } catch (err) {
      console.error("Login error", err);
      setMessage("Server error");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/users/register", {
        email,
        password,
        role,
      });

      setMessage(res.data);
      if (res.data.includes("successful")) {
        setIsLogin(true); // Switch to login
      }
    } catch (err) {
      console.error("Registration error", err);
      setMessage("Server error");
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <button className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => setIsLogin(true)}>Login</button>
        <button className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setIsLogin(false)}>Register</button>
      </div>

      <form onSubmit={isLogin ? handleLogin : handleRegister} className="w-50 mx-auto border p-4 rounded bg-light">
        <h3 className="text-center mb-3">{isLogin ? "Login" : "Register"}</h3>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isLogin && (
          <div className="mb-3">
            <label>Select Role:</label><br />
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="role" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} />
              <label className="form-check-label">Admin</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="role" value="employee" checked={role === "employee"} onChange={() => setRole("employee")} />
              <label className="form-check-label">Employee</label>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-success w-100">{isLogin ? "Login" : "Register"}</button>
        {message && <p className="text-center text-danger mt-3">{message}</p>}
      </form>
    </div>
  );
};

export default LoginRegister;
