import resumePdf from '../assets/Nisha_Kakadiya_Resume.pdf'
import { profile } from '../data/resume'

export default function Home() {
  return (
    <section className="page page-home">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Hi, I’m Nisha</p>
          <h1>{profile.role}</h1>
          <p className="hero-text">{profile.tagline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href={resumePdf} download>
              Download Resume
            </a>
            <a className="secondary-button" href="/contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card__meta">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
          </div>
          <div className="hero-card__stats">
            <div>
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Core Skills</span>
            </div>
          </div>
          <div className="hero-tags">
            {profile.skills.slice(0, 6).map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="feature-strip">
        <div>
          <h2>Education</h2>
          <p>
            {profile.education.degree} — {profile.education.institution}
          </p>
          <p>{profile.education.dates}</p>
          <p>GPA: {profile.education.gpa}</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </section>
  )
}
