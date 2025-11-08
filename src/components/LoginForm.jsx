import React, { useState } from 'react'

export function LoginForm(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('patient')

  function handleSubmit(e){
    e.preventDefault()
    console.log('login', { email, password, role })
    alert('Placeholder: integrate with backend JWT API')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h6>Login</h6>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Role</label>
        <select value={role} onChange={e=>setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="provider">Provider</option>
        </select>
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  )
}
