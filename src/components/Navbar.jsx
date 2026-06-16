import { useState, useEffect } from "react";
import { data } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#" className="navbar__logo" onClick={(e) => handleNav(e, "hero")}>
        {data.name.split(" ")[0]}<span>.</span>
      </a>

      <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>

      <ul className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={(e) => handleNav(e, l)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
