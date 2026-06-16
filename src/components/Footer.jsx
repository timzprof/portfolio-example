import { data } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built by <strong>{data.name}</strong> &mdash; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
