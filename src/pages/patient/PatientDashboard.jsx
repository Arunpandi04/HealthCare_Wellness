import { DashboardCard } from '../../components/DashboardCard'
import { GoalTrackerForm } from '../../components/GoalTrackerForm'

export default function PatientDashboard(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard title="Wellness Goals" />
        <DashboardCard title="Preventive Care Reminders" />
        <div className="col-span-1 md:col-span-2">
          <GoalTrackerForm />
        </div>
      </div>
    </div>
  )
}
