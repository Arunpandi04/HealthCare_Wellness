import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PublicHealthInfo from './pages/PublicHealthInfo'
import PatientDashboard from './pages/patient/PatientDashboard'
import PatientProfile from './pages/patient/PatientProfile'
import PatientGoals from './pages/patient/PatientGoals'
import PatientMessages from './pages/patient/PatientMessages'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold">Wellness Portal</Link>
          <nav className="flex gap-3 items-center">
            <Link to="/public/health-info" className="text-sm">Health Info</Link>
            <Link to="/login" className="text-sm">Login</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/public/health-info" element={<PublicHealthInfo />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route path="/patient/goals" element={<PatientGoals />} />
          <Route path="/patient/messages" element={<PatientMessages />} />
        </Routes>
      </main>
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Wellness Portal — <Link to="/public/health-info">Privacy</Link>
        </div>
      </footer>
    </div>
  )
}
