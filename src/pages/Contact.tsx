import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section className="page page-contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something together</h2>
        <p>
          I’m available for new React and full-stack roles, contract work, or collaboration on web applications.
        </p>
      </div>
      <div className="contact-grid">
        <div className="glass-card contact-card">
          <h3>Get in touch</h3>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
          <p>
            <strong>Location:</strong> {profile.location}
          </p>
          <div className="profile-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="glass-card info-card">
          <h3>Core specialties</h3>
          <div className="skills-grid">
            {profile.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
