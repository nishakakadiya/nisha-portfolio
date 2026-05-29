import { NavLink } from 'react-router-dom'
import resumePdf from '../assets/Nisha_Kakadiya_Resume.pdf'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function NavBar() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">NK</span>
        <div>
          <p>nisha kakadiya</p>
          <span>React + full-stack developer</span>
        </div>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a className="resume-button" href={resumePdf} download>
        Download Resume
      </a>
    </header>
  )
}
