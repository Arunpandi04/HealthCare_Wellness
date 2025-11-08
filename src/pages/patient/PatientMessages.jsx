import Sidebar from "../../components/Sidebar";

export default function PatientMessages(){
  return (
    <div>
      <Sidebar />

      <main className="content-with-sidebar" style={{ padding: 20 }}>
        <h1 className="h2 mb-4">Messages</h1>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-muted">No messages yet. This is a placeholder for the messages/inbox UI.</p>
        </div>
      </main>
    </div>
  )
}
