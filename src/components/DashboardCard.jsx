export function DashboardCard({ title = 'Card', children }){
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{children ?? <p className="text-sm text-gray-600">Placeholder content</p>}</div>
    </div>
  )
}
