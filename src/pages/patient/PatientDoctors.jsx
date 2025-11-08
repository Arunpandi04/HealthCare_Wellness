import Sidebar from '../../components/Sidebar'

export default function PatientDoctors(){
  return (
    <div>
      <Sidebar />

      <main className="content-with-sidebar" style={{ padding: 20 }}>
        <h1 className="h2 mb-4">Your Healthcare Team</h1>

        <div className="row g-4">
          {/* Example doctor cards - replace with actual data */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Dr. Sarah Johnson</h5>
                <h6 className="card-subtitle mb-2 text-muted">Primary Care Physician</h6>
                <p className="card-text">
                  <small className="text-muted">
                    <i className="bi bi-geo-alt me-1"></i>
                    Main Street Medical Center
                  </small>
                </p>
                <p className="card-text">Specializes in family medicine and preventive care.</p>
                <button className="btn btn-outline-primary">Schedule Appointment</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Dr. Michael Chen</h5>
                <h6 className="card-subtitle mb-2 text-muted">Cardiologist</h6>
                <p className="card-text">
                  <small className="text-muted">
                    <i className="bi bi-geo-alt me-1"></i>
                    Heart & Vascular Institute
                  </small>
                </p>
                <p className="card-text">Expert in cardiovascular health and preventive cardiology.</p>
                <button className="btn btn-outline-primary">Schedule Appointment</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Dr. Emily Rodriguez</h5>
                <h6 className="card-subtitle mb-2 text-muted">Nutritionist</h6>
                <p className="card-text">
                  <small className="text-muted">
                    <i className="bi bi-geo-alt me-1"></i>
                    Wellness Nutrition Center
                  </small>
                </p>
                <p className="card-text">Specializes in dietary planning and nutritional counseling.</p>
                <button className="btn btn-outline-primary">Schedule Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}