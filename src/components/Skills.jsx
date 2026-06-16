import { data } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div ref={ref} className="reveal-container">
          <h2 className="section__title">Skills</h2>
          <div className="skills__grid">
            {data.skills.map((skill, i) => (
              <div key={skill} className="skill-chip reveal-child" style={{ "--i": i }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
