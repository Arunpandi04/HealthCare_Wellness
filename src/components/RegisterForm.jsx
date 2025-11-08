import React, { useState } from 'react'

export function RegisterForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('patient')
  const [consent, setConsent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    if(!consent){
      alert('You must give consent to register')
      return
    }
    console.log('register', { name, email, role })
    alert('Placeholder: send registration to backend')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block text-sm font-medium">Full name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Role</label>
        <select value={role} onChange={e=>setRole(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded">
          <option value="patient">Patient</option>
          <option value="provider">Provider</option>
        </select>
      </div>
      <div className="flex items-start gap-2">
        <input id="consent" type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} />
        <label htmlFor="consent" className="text-sm">I consent to my health data being used according to the privacy policy</label>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      </div>
    </form>
  )
}
