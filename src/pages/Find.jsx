import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Sample doctors data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15 years",
    rating: 4.9,
    isAvailable: true,
    availableSlots: ["10:00 AM", "02:30 PM", "04:00 PM"],
    education: "MD from Harvard Medical School",
    certifications: ["Board Certified Cardiologist"],
    languages: ["English", "Spanish"],
    bio: "Specialized in interventional cardiology with extensive experience.",
    image: "SJ",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    experience: "12 years",
    rating: 4.8,
    isAvailable: false,
    availableSlots: [],
    education: "MD from Stanford University",
    certifications: ["Board Certified Dermatologist"],
    languages: ["English", "Mandarin"],
    bio: "Expert in medical and cosmetic dermatology.",
    image: "MC",
  },
];

function HealthcareView() {
  const [doctors, setDoctors] = useState(doctorsData);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");

  const handleBookAppointment = (doctorId, slot) => {
    alert(
      `Appointment booked with ${
        doctors.find((d) => d.id === doctorId).name
      } at ${slot}`
    );
  };

  const handleShowProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      !specialtyFilter || doctor.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="text-center">
            <h1 className="display-5 fw-bold text-primary mb-3">
              Find Your Doctor
            </h1>
            <p className="lead text-muted">
              Book appointments with qualified healthcare professionals
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
          >
            <option value="">All Specialties</option>
            <option value="Cardiologist">Cardiology</option>
            <option value="Dermatologist">Dermatology</option>
            <option value="Pediatrician">Pediatrics</option>
            <option value="Orthopedist">Orthopedics</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <button className="btn btn-outline-primary w-100">
            <i className="bi bi-filter me-2"></i>
            Filters
          </button>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="row g-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="col-xl-6 col-12">
            <DoctorCard
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
              onShowProfile={handleShowProfile}
            />
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedDoctor && (
        <div
          className={`modal fade ${showModal ? "show d-block" : ""}`}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Doctor Profile</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <DoctorProfileModal doctor={selectedDoctor} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Doctor Card Component
function DoctorCard({ doctor, onBookAppointment, onShowProfile }) {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="row">
          {/* Doctor Avatar and Basic Info */}
          <div className="col-md-3 text-center">
            <div
              className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {doctor.image}
            </div>
            <div
              className={`badge ${
                doctor.isAvailable ? "bg-success" : "bg-danger"
              } mb-2`}
            >
              {doctor.isAvailable ? "Available" : "Not Available"}
            </div>
          </div>

          {/* Doctor Details */}
          <div className="col-md-6">
            <h5 className="card-title text-dark mb-2">{doctor.name}</h5>
            <p className="text-primary mb-2 fw-semibold">{doctor.specialty}</p>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-star-fill text-warning me-1"></i>
              <span className="text-dark fw-semibold">{doctor.rating}</span>
              <span className="text-muted ms-2">({doctor.experience})</span>
            </div>
            <p className="text-muted small mb-3">{doctor.bio}</p>

            {/* Languages */}
            <div className="mb-3">
              <small className="text-muted">
                <i className="bi bi-translate me-1"></i>
                {doctor.languages.join(", ")}
              </small>
            </div>
          </div>

          {/* Availability Section */}
          <div className="col-md-3">
            {doctor.isAvailable ? (
              <div>
                <h6 className="text-success mb-3">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  Available Today
                </h6>
                <div className="mb-3">
                  {doctor.availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      className="btn btn-outline-primary btn-sm w-100 mb-2"
                      onClick={() => onBookAppointment(doctor.id, slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <i className="bi bi-x-circle-fill text-danger display-6 mb-2"></i>
                <p className="text-muted small">
                  Not available for appointments today
                </p>
              </div>
            )}

            <button
              className="btn btn-primary w-100 mt-2"
              onClick={() => onShowProfile(doctor)}
            >
              <i className="bi bi-person me-1"></i>
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Doctor Profile Modal Component
function DoctorProfileModal({ doctor }) {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-3 text-center">
          <div
            className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: "100px",
              height: "100px",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {doctor.image}
          </div>
          <div
            className={`badge ${
              doctor.isAvailable ? "bg-success" : "bg-danger"
            } fs-6`}
          >
            {doctor.isAvailable
              ? "Currently Available"
              : "Currently Unavailable"}
          </div>
        </div>
        <div className="col-md-9">
          <h4 className="text-dark">{doctor.name}</h4>
          <h6 className="text-primary mb-3">{doctor.specialty}</h6>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span className="fw-semibold">{doctor.rating} Rating</span>
            <span className="text-muted ms-3">
              {doctor.experience} Experience
            </span>
          </div>
          <p className="text-muted">{doctor.bio}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h6 className="text-dark mb-3">Education & Certification</h6>
          <p className="text-muted mb-2">{doctor.education}</p>
          <ul className="list-unstyled">
            {doctor.certifications.map((cert, index) => (
              <li key={index} className="text-muted mb-1">
                <i className="bi bi-check-circle text-success me-2"></i>
                {cert}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h6 className="text-dark mb-3">Languages Spoken</h6>
          <div className="d-flex flex-wrap gap-2">
            {doctor.languages.map((lang, index) => (
              <span key={index} className="badge bg-light text-dark border">
                {lang}
              </span>
            ))}
          </div>

          {doctor.isAvailable && (
            <div className="mt-4">
              <h6 className="text-dark mb-3">Available Time Slots</h6>
              <div className="row g-2">
                {doctor.availableSlots.map((slot, index) => (
                  <div key={index} className="col-6">
                    <button className="btn btn-success w-100 btn-sm">
                      {slot}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HealthcareView;
