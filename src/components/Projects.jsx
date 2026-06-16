import { data } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className="reveal-container">
          <h2 className="section__title">Projects</h2>
          <div className="projects__grid">
            {data.projects.map((p, i) => (
              <div key={p.id} className="project-card reveal-child" style={{ "--i": i }}>
                <div className="project-card__body">
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="project-card__links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--sm btn--outline">
                    GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--sm btn--primary">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
