import { data } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal-container">
          <h2 className="section__title">About Me</h2>
          <div className="about__grid">
            <div className="about__avatar reveal-child from-left" style={{ "--i": 0 }}>
              <div className="avatar-placeholder">
                {data.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
            <div className="about__text reveal-child from-right" style={{ "--i": 1 }}>
              <p>{data.about}</p>
              <a href={`mailto:${data.email}`} className="btn btn--primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
