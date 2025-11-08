import './Sidebar.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const linkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

  return (
    <aside className="app-sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-brand">Health</div>
        <nav className="sidebar-nav">
          <NavLink to="/patient/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/patient/profile" className={linkClass}>My Profile</NavLink>
          <NavLink to="/patient/goals" className={linkClass}>Wellness Goals</NavLink>
          <NavLink to="/patient/messages" className={linkClass}>Messages</NavLink>
          <a className="nav-link" href="/">Logout</a>
        </nav>
      </div>
    </aside>
  )
}
