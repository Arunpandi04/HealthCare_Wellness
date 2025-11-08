import { ProfileEditor } from '../../components/ProfileEditor'
import Sidebar from '../../components/Sidebar'

export default function PatientProfile(){
  return (
    <div>
      <Sidebar />

      <main className="content-with-sidebar" style={{ padding: 20 }}>
        <div className="max-w-2xl">
          <h1 className="h2 mb-4">Profile</h1>
          <ProfileEditor />
        </div>
      </main>
    </div>
  )
}
