import { useState } from 'react'

export function LoginForm(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('patient')

  function handleSubmit(e){
    e.preventDefault()
    // Placeholder: call backend auth endpoint and store JWT in memory or cookie (secure)
    console.log('login', { email, password, role })
    alert('This is a placeholder. Integrate with backend JWT API.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Role</label>
        <select value={role} onChange={e=>setRole(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded">
          <option value="patient">Patient</option>
          <option value="provider">Provider</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Sign in</button>
      </div>
    </form>
  )
}
