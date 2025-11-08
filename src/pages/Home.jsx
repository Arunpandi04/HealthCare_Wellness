import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="prose mx-auto">
      <h1>Healthcare Wellness & Preventive Care Portal</h1>
      <p>Welcome. Use the navigation to sign in or explore public health info.</p>
      <div className="flex gap-4">
        <Link to="/login" className="btn px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
        <Link to="/register" className="px-4 py-2 border rounded">Register</Link>
      </div>
    </div>
  )
}
