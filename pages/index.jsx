import Link from 'next/link'

export default function Home() {
  return (
    <div className="prose mx-auto">
      <h1>Healthcare Wellness & Preventive Care Portal</h1>
      <p>Welcome. Use the navigation to sign in or explore public health info.</p>
      <div className="d-flex gap-4">
        <Link href="/login"><a className="btn px-4 py-2 bg-blue-600 text-white rounded">Login</a></Link>
        <Link href="/register"><a className="px-4 py-2 border rounded">Register</a></Link>
      </div>
    </div>
  )
}
