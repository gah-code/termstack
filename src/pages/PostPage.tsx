import { Link, useParams } from "react-router-dom";
import { PostArticle } from "../components/PostArticle";
import { ThemeToggle } from "../components/ThemeToggle";
import { postsBySlug } from "../content/posts";

type PostPageProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function PostPage({ theme, onToggleTheme }: PostPageProps) {
  const { slug } = useParams();
  const post = slug ? postsBySlug[slug] : null;

  if (!post) {
    return (
      <section className="glossary-shell" aria-labelledby="not-found-title">
        <nav className="page-nav" aria-label="Page navigation">
          <Link className="home-link" to="/">
            ← Back to glossary
          </Link>

          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </nav>

        <div className="empty-state">
          <p className="empty-state-kicker">Post not found</p>
          <h1 id="not-found-title">This article does not exist.</h1>
          <p>Return to the glossary and choose another learning term.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="glossary-shell post-shell" aria-labelledby="post-title">
      <nav className="page-nav" aria-label="Page navigation">
        <Link className="home-link" to="/">
          ← Back to glossary
        </Link>

        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </nav>

      <PostArticle post={post} />
    </section>
  );
}
