import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://steadofoods.onrender.com/api/loginuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    if (!json.success) {
      toast.error("Invalid credentials! Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
      });
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      setTimeout(() => navigate("/"), 3500); // Navigate after toast
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ marginTop: "5rem", minHeight: "80vh" }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-center border-bottom pb-3">Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control shadow-sm"
              name="email"
              value={credentials.email}
              onChange={onChange}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control shadow-sm"
              name="password"
              value={credentials.password}
              onChange={onChange}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 shadow-sm"
            style={{
              borderRadius: "5px",
              backgroundColor: "#007bff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Login
          </button>
          <div className="text-center mt-3 fw-bold">
            Don't Have an account?
            <Link
              to="/signup"
              className="btn btn-danger fw-bold shadow-sm"
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                padding: "5px 10px",
                boxShadow: "0px 4px 6px rgba(255, 0, 0, 0.2)",
              }}
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
