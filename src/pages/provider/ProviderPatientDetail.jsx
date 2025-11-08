import { useParams } from 'react-router-dom'

export default function ProviderPatientDetail(){
  const { id } = useParams()
  return (
    <div>
      <h1 className="h2 mb-4">Patient Detail — {id}</h1>
      <p>Placeholder detail view. Here you'd show compliance, goals and contact info.</p>
    </div>
  )
}
