import { profile } from '../data/resume'

export default function Experience() {
  return (
    <section className="page page-experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Career highlights</h2>
        <p>
          Focused on building high-quality web products with scalable frontend and backend architecture.
        </p>
      </div>
      <div className="grid cards-grid">
        {profile.experience.map((item) => (
          <article key={item.role} className="glass-card">
            <div className="card-header">
              <h3>{item.role}</h3>
              <span>{item.dates}</span>
            </div>
            <p className="muted">{item.company}</p>
            <ul>
              {item.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
