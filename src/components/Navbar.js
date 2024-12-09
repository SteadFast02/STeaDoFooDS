import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Model from "../Model";
import Cart from "../screen/Cart";
import { useCart } from "../components/ContextReducer";

const Navbar = (props) => {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  let data = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontFamily: "cursive",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            STeaDoFooDS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ fontFamily: "math" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/faqs">
                  Faqs
                </Link>
              </li>
              {localStorage.getItem("authToken") && (
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/myOrder">
                    My Orders
                  </Link>
                </li>
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn btn-outline-success mx-1 shadow-sm"
                  to="/login"
                >
                  SignIn
                </Link>
                <Link
                  className="btn btn-outline-success mx-1 shadow-sm"
                  to="/signup"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Link
                  className="btn btn-success text-white mx-1 position-relative shadow-sm"
                  to="#"
                  onClick={() => setCartView(true)}
                >
                  My Cart
                  {data.length !== 0 && (
                    <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                      {data.length}
                    </span>
                  )}
                </Link>
                {cartView ? (
                  <Model onClose={() => setCartView(false)}>
                    <Cart />
                  </Model>
                ) : null}
                <Link
                  className="btn btn-danger text-white mx-1 shadow-sm"
                  to="#"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
