import React from "react";
import "../../assests/logo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="card shadow p-2">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo & Title */}
          <div className="col-12 col-md-4 d-flex align-items-center mb-2 mb-md-0">
            <Link
              to="/"
              className="d-flex text-decoration-none align-items-center"
            >
              <img src="/logo.png" alt="logo" width="50" className="me-2" />
              <span className="fs-5 fw-bold text-dark">Receipe Hub</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="col-8 col-md-4 mb-2 mb-md-0">
            <input
              type="text"
              placeholder="Search For Recipe"
              className="form-control"
            />
          </div>

          {/* Sign-In Button */}
          <div className="col-4 col-md-4 mb-2 d-flex justify-content-md-end">
            <button className="btn btn-primary w-md-auto">Sign-In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
