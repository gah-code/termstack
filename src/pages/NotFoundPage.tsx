import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

type NotFoundPageProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function NotFoundPage({ theme, onToggleTheme }: NotFoundPageProps) {
  return (
    <section className="glossary-shell" aria-labelledby="not-found-title">
      <nav className="page-nav" aria-label="Page navigation">
        <Link className="home-link" to="/">
          ← Back to glossary
        </Link>

        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </nav>

      <div className="empty-state">
        <p className="empty-state-kicker">404</p>

        <h1 id="not-found-title">This page drifted out of the glossary.</h1>

        <p>
          The route you opened does not exist. Return to the glossary and keep
          learning.
        </p>

        <Link className="theme-toggle home-cta" to="/">
          Go to glossary
        </Link>
      </div>
    </section>
  );
}
