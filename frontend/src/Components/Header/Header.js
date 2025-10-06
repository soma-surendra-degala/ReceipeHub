import React from "react";
import "../../assests/logo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="card shadow">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Link
            to="/"
            className="d-flex text-decoration-none align-items-center"
          >
            <div className="m-2">
              <img src="/logo.png" alt="logo" width="50" />
            </div>
            <div className="d-flex align-items-center text-dark">
              <span className="fs-5 fw-bold">Receipe Hub</span>
            </div>
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search For Receipe"
            className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-primary mx-5">Sign-In</button>
        </div>
      </div>
    </div>
  );
}
