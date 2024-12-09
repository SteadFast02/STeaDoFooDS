import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, white, rgb(0, 123, 143))",
      }}
    >
      <div className="container">
        <footer className="py-5">
          <h1
            style={{
              fontFamily: "cursive",
              fontSize: "xx-large",
              color: "#000000",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            STeaDoFooDS
          </h1>
          <div className="row border-top py-4 my-4">
            {/* Features Column */}
            <div className="col-12 col-md-3">
              <h5 className="text-white" style={footerTextStyle}>
                Features
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to="/"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/about"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/faqs"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    Faqs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links Column */}
            <div className="col-12 col-md-3">
              <h5 className="text-white" style={footerTextStyle}>
                Social Links
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to="https://github.com/SteadFast02"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    GitHub
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="https://www.linkedin.com/in/achal-gupta-0861b6210/"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100049135571810"
                    className="nav-link p-0 text-muted"
                    style={linkStyle}
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-12 col-md-6">
              <form>
                <h5 className="text-white" style={footerTextStyle}>
                  Subscribe to our STeaDoFooDS
                </h5>
                <p className="text-muted" style={footerTextStyle}>
                  Monthly digest of what's new and exciting from us.
                </p>
                <div className="d-flex w-100 gap-2">
                  <label
                    htmlFor="newsletter1"
                    className="visually-hidden"
                    style={footerTextStyle}
                  >
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    style={inputStyle}
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={buttonStyle}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p className="text-white" style={footerTextStyle}>
              &copy; 2024 STeaDoFooDS, A Food Ordering Website.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Custom Styles
const footerTextStyle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  marginBottom: "1rem",
};

const linkStyle = {
  fontSize: "1rem",
  color: "#aaa",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const inputStyle = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  borderColor: "#007bff",
  transition: "background-color 0.3s ease, border-color 0.3s ease",
};

buttonStyle[":hover"] = {
  backgroundColor: "#0056b3",
  borderColor: "#0056b3",
};
