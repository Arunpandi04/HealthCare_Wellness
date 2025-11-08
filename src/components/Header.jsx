import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-white ${
        isScrolled ? "scrolled" : ""
      } shadow-sm`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i
            className="bi bi-heart-pulse-fill text-primary me-2 fs-4"
            aria-hidden
          ></i>
          <span className="fs-5 fw-bold text-primary">Wellness Portal</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/public/health-info">
                Health Info
              </Link>
            </li>

            {/* Authenticated Navigation */}
            {isAuthenticated() && user?.role === "patient" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient/doctors">
                    Find Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient/messages">
                    Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient/goals">
                    My Goals
                  </Link>
                </li>
              </>
            )}

            {isAuthenticated() &&
              (user?.role === "healthcare_provider" ||
                user?.role === "doctor") && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/provider/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/provider/patients">
                      Patients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/provider/schedule">
                      Schedule
                    </Link>
                  </li>
                </>
              )}
          </ul>

          <div className="d-flex gap-2 align-items-center">
            {isAuthenticated() ? (
              <>
                {/* User Welcome Message */}
                <div className="d-none d-md-block me-3">
                  <span className="text-dark">
                    Welcome, <strong>{user?.fullName?.split(" ")[0]}</strong>
                  </span>
                </div>

                {/* Profile Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle me-1"></i>
                    Profile
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={
                          user?.role === "patient"
                            ? "/patient/profile"
                            : "/provider/profile"
                        }
                      >
                        <i className="bi bi-person me-2"></i>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              /* Guest Navigation */
              <>
                <Link to="/login" className="btn btn-outline-primary">
                  <i className="bi bi-box-arrow-in-right me-1"></i>
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  <i className="bi bi-person-plus me-1"></i>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
