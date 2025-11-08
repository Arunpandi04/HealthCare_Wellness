import { useRouter } from 'next/router'

export default function ProviderPatientDetail() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Patient Detail — {id}</h1>
      <p>Placeholder detail view. Here you'd show compliance, goals and contact info.</p>
    </div>
  )
}
