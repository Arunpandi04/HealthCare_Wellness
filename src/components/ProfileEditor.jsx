import React, { useState } from 'react'

export function ProfileEditor(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [allergies, setAllergies] = useState('')
  const [medications, setMedications] = useState('')

  function handleSave(e){
    e.preventDefault()
    console.log('profile update', { name, email, phone, age, allergies, medications })
    alert('Profile updated locally. Implement API call to persist changes.')
  }

  return (
    <form onSubmit={handleSave} className="bg-white p-4 rounded shadow space-y-3">
      <div>
        <label className="block text-sm">Full name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Age</label>
        <input type="number" value={age} onChange={e=>setAge(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Allergies</label>
        <input value={allergies} onChange={e=>setAllergies(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Medications</label>
        <input value={medications} onChange={e=>setMedications(e.target.value)} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">Save Profile</button>
      </div>
    </form>
  )
}
