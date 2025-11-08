import { DashboardCard } from '../../components/DashboardCard'
import { GoalTrackerForm } from '../../components/GoalTrackerForm'
import Sidebar from '../../components/Sidebar'

export default function PatientDashboard(){
  return (
    <div>
      <Sidebar />
      <main className="content-with-sidebar" style={{ padding: 20 }}>
        <h1 className="h2 mb-4">Welcome, Patient</h1>
        <div className="row g-4">
          <div className="col-12 mb-4">
            <DashboardCard title="Wellness Goals" />
          </div>

          <div className="col-12 mb-4">
            <DashboardCard title="Preventive Care Reminders" />
          </div>

          <div className="col-12">
            <GoalTrackerForm />
          </div>
        </div>
      </main>
    </div>
  )
}
