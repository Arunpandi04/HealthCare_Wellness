import { ProfileEditor } from '../../components/ProfileEditor'

export default function PatientProfile() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <ProfileEditor />
    </div>
  )
}
