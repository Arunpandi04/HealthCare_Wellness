import { GoalTrackerForm } from '../../components/GoalTrackerForm'
import Sidebar from '../../components/Sidebar'

export default function PatientGoals(){
  return (
    <div>
      <Sidebar />

      <main className="content-with-sidebar" style={{ padding: 20 }}>
        <h1 className="h2 mb-4">Daily Goals</h1>
        <GoalTrackerForm />
      </main>
    </div>
  )
}
