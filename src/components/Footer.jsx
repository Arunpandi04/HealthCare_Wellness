import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-white pt-5 pb-3 mt-auto">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4 pb-4">
          {/* Company Info */}
          <div className="col-12 col-lg-4 pe-lg-5">
            <Link to="/" className="d-inline-flex align-items-center mb-3 text-decoration-none">
              <i className="bi bi-heart-pulse-fill text-primary me-2 fs-4"></i>
              <span className="fs-4 fw-bold text-primary">Medicust</span>
            </Link>
            <p className="text-muted mb-3">
              Providing quality healthcare services to help you maintain optimal health and wellness.
              Your trusted partner in preventive care and medical excellence.
            </p>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-muted social-link">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-muted social-link">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-muted social-link">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-muted social-link">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="footer-link">Our Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/doctors" className="footer-link">Our Doctors</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/services/primary-care" className="footer-link">Primary Care</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/preventive-care" className="footer-link">Preventive Care</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/telemedicine" className="footer-link">Telemedicine</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/diagnostics" className="footer-link">Diagnostics</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-lg-4">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt text-primary me-2 fs-5"></i>
                <span className="text-muted">
                  9470 Riverview, Glen 60099<br />
                  United States
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone text-primary me-2 fs-5"></i>
                <a href="tel:+1234567890" className="text-muted text-decoration-none">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope text-primary me-2 fs-5"></i>
                <a href="mailto:contact@medicust.com" className="text-muted text-decoration-none">
                  contact@medicust.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock text-primary me-2 fs-5"></i>
                <span className="text-muted">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="text-muted">
              © {currentYear} Medicust. All rights reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/privacy" className="text-muted me-3 footer-link">Privacy Policy</Link>
            <Link to="/terms" className="text-muted me-3 footer-link">Terms of Use</Link>
            <Link to="/sitemap" className="text-muted footer-link">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}