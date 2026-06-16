import { data } from "../data/portfolio";

export default function Hero() {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div aria-hidden="true" className="hero__orbs">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>
      <div className="hero__content">
        <p className="hero__greeting">Hi, I&apos;m</p>
        <h1 className="hero__name">{data.name}</h1>
        <h2 className="hero__role">{data.role}</h2>
        <p className="hero__tagline">{data.tagline}</p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scroll("projects")}>
            View My Work
          </button>
          <button className="btn btn--outline" onClick={() => scroll("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero__scroll-hint" onClick={() => scroll("about")}>
        <span />
      </div>
    </section>
  );
}
