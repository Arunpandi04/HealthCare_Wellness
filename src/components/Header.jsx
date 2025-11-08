import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize Bootstrap collapse
    if (typeof document !== 'undefined') {
      const bootstrap = require('bootstrap');
      const navbarCollapse = document.getElementById('navbarContent');
      if (navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });

        // Close mobile menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Bootstrap lg breakpoint
              bsCollapse.hide();
            }
          });
        });
      }
    }
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top bg-white shadow-sm ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-heart-pulse-fill text-primary me-2 fs-4"></i>
          <span className="fs-4 fw-bold text-primary">Medicust</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <Link to="/login" className="btn btn-outline-primary px-4">Sign In</Link>
            <Link to="/register" className="btn btn-primary px-4">
              <i className="bi bi-calendar-check me-2"></i>
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}