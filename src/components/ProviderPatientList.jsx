import { Link } from 'react-router-dom'

export function ProviderPatientList(){
  const demo = [
    { id: 'p1', name: 'Alice', compliance: 'Good' },
    { id: 'p2', name: 'Bob', compliance: 'Missed' }
  ]

  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Patient</th>
            <th className="py-2">Compliance</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {demo.map(p => (
            <tr key={p.id} className="border-t">
              <td className="py-2">{p.name}</td>
              <td className="py-2">{p.compliance}</td>
              <td className="py-2"><Link to={`/provider/patient/${p.id}`} className="text-blue-600">View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
