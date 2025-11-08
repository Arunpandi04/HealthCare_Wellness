import { ProviderPatientList } from '../../components/ProviderPatientList'

export default function ProviderDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Provider Dashboard</h1>
      <ProviderPatientList />
    </div>
  )
}
