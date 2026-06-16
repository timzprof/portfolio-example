import { data } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div ref={ref} className="reveal-container">
          <h2 className="section__title">Experience</h2>
          <div className="timeline">
            {data.experience.map((e, i) => (
              <div key={i} className="timeline__item reveal-child from-left" style={{ "--i": i }}>
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <div className="timeline__header">
                    <h3>{e.role}</h3>
                    <span className="timeline__period">{e.period}</span>
                  </div>
                  <p className="timeline__company">{e.company}</p>
                  <p className="timeline__desc">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
