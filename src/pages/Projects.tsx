import { profile } from '../data/resume'

export default function Projects() {
  return (
    <section className="page page-projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
        <p>
          Practical applications of React, Node, payment integrations, real-time UI, and reusable design systems.
        </p>
      </div>
      <div className="grid cards-grid">
        {profile.projects.map((project) => (
          <article key={project.name} className="glass-card project-card">
            <div className="card-header">
              <h3>{project.name}</h3>
            </div>
            <p className="project-summary">{project.summary}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
