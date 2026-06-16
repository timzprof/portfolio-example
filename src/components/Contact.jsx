import { useState } from "react";
import { data } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact__container">
        <div ref={ref} className="reveal">
          <h2 className="section__title">Get In Touch</h2>
          <p className="contact__sub">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          {sent ? (
            <div className="contact__success">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Send Message
              </button>
            </form>
          )}

          <div className="contact__links">
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
