import { DashboardCard } from '../../components/DashboardCard'
import { GoalTrackerForm } from '../../components/GoalTrackerForm'

export default function PatientDashboard(){
  return (
    <div>
      <h1 className="h2 mb-4">Patient Dashboard</h1>
      <div className="row g-4">
        <DashboardCard title="Wellness Goals" />
        <DashboardCard title="Preventive Care Reminders" />
        <div className="col-span-1 md:col-span-2">
          <GoalTrackerForm />
        </div>
      </div>
    </div>
  )
}
