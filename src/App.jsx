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
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
    </div>
  )
}
