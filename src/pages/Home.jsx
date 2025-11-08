import { Link } from 'react-router-dom'
import Header from '../components/Header'
import doctorImg from '../assets/doctor.png'

export default function Home(){
  return (
    <div className="container-fluid p-0">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <i className="bi bi-heart-pulse-fill text-primary me-2 fs-4"></i>
            <span className="fs-4 fw-bold text-primary">Health Care Portal</span>
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

      {/* Hero Section */}
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="row align-items-center">
          <div className="col-lg-6 py-5">
            <span className="badge bg-primary-subtle text-primary mb-3">Medical And Health</span>
            <h1 className="display-4 fw-bold mb-4">
              A professional<br />
              and friendly care<br />
              provider.
            </h1>
            <p className="text-muted mb-4">
              We provide professional and friendly healthcare services to help you maintain your health and wellness.
            </p>
            <div className="d-flex gap-3">
              <Link to="/login" className="btn btn-primary btn-lg px-4">
                Get Started
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <Link to="/register" className="btn btn-outline-primary btn-lg px-4">
                Register Now
              </Link>
            </div>
            <div className="d-flex gap-4 mt-5">
              <div>
                <h3 className="fw-bold mb-1">10+</h3>
                <p className="text-muted mb-0">Years Experience</p>
              </div>
              <div>
                <h3 className="fw-bold mb-1">50k+</h3>
                <p className="text-muted mb-0">Happy Patients</p>
              </div>
              <div>
                <h3 className="fw-bold mb-1">100+</h3>
                <p className="text-muted mb-0">Medical Experts</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img 
              src={doctorImg}
              alt="Healthcare Professional" 
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
