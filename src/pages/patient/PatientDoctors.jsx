import Sidebar from '../../components/Sidebar'

export default function PatientDoctors(){
  return (
    <div>
      <Sidebar />

      <main className="content-with-sidebar" style={{ padding: 20 }}>
        {/* Hero Section */}
        <div className="bg-primary text-white p-4 rounded-lg mb-4 position-relative overflow-hidden">
          <div className="position-absolute top-0 end-0 opacity-10">
            <i className="bi bi-heart-pulse" style={{ fontSize: '120px' }}></i>
          </div>
          <h1 className="h2 mb-2">Your Healthcare Team</h1>
          <p className="lead mb-0">Expert care providers committed to your well-being</p>
        </div>

        {/* Quick Stats */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-3 text-center">
              <i className="bi bi-people-fill text-primary mb-2" style={{ fontSize: '24px' }}></i>
              <h3 className="h5 mb-1">3 Specialists</h3>
              <p className="text-muted mb-0">In Your Care Team</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-3 text-center">
              <i className="bi bi-calendar2-check text-primary mb-2" style={{ fontSize: '24px' }}></i>
              <h3 className="h5 mb-1">Next Visit</h3>
              <p className="text-muted mb-0">Nov 15, 2025</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded-3 text-center">
              <i className="bi bi-star-fill text-primary mb-2" style={{ fontSize: '24px' }}></i>
              <h3 className="h5 mb-1">5 Years</h3>
              <p className="text-muted mb-0">Average Experience</p>
            </div>
          </div>
        </div>

        {/* Doctor Cards */}
        <h2 className="h4 mb-4">Your Care Providers</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-person-circle text-primary h4 mb-0"></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-0">Dr. Sarah Johnson</h5>
                    <span className="badge bg-primary-subtle text-primary">Primary Care Physician</span>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="card-text text-muted mb-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    Main Street Medical Center
                  </p>
                  <p className="card-text mb-0">
                    <i className="bi bi-journal-medical me-2"></i>
                    Family medicine and preventive care
                  </p>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">
                    <i className="bi bi-calendar-plus me-2"></i>
                    Schedule Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-person-circle text-primary h4 mb-0"></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-0">Dr. Michael Chen</h5>
                    <span className="badge bg-primary-subtle text-primary">Cardiologist</span>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="card-text text-muted mb-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    Heart & Vascular Institute
                  </p>
                  <p className="card-text mb-0">
                    <i className="bi bi-journal-medical me-2"></i>
                    Cardiovascular health specialist
                  </p>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">
                    <i className="bi bi-calendar-plus me-2"></i>
                    Schedule Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-person-circle text-primary h4 mb-0"></i>
                  </div>
                  <div>
                    <h5 className="card-title mb-0">Dr. Emily Rodriguez</h5>
                    <span className="badge bg-primary-subtle text-primary">Nutritionist</span>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="card-text text-muted mb-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    Wellness Nutrition Center
                  </p>
                  <p className="card-text mb-0">
                    <i className="bi bi-journal-medical me-2"></i>
                    Dietary planning and nutrition expert
                  </p>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">
                    <i className="bi bi-calendar-plus me-2"></i>
                    Schedule Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}