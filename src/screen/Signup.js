import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://steadofoods.onrender.com/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      alert("Account has been created. Login with your email ID.");
      navigate("/login");
    } else {
      alert("Enter valid credentials.");
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
          maxWidth: "500px",
          width: "100%",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-center border-bottom pb-3">Signup</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              name="name"
              value={credentials.name}
              onChange={onChange}
              style={{ borderRadius: "5px" }}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              name="geolocation"
              value={credentials.geolocation}
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
            Submit
          </button>
          <div className="text-center mt-3 fw-bold">
            Have an account?
            <Link
              to="/login"
              className="btn btn-danger fw-bold shadow-sm"
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                padding: "5px 10px",
                boxShadow: "0px 4px 6px rgba(255, 0, 0, 0.2)",
              }}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
