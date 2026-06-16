import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { categories, terms, type TermCategory } from "./content/terms";
import { CategoryFilter } from "./components/CategoryFilter";
import { TermList } from "./components/TermList";
import { ThemeToggle } from "./components/ThemeToggle";
import contentModelingPost from "./content/posts/content-modeling.md?raw";

type Theme = "light" | "dark";

const postsBySlug: Record<string, string> = {
  "content-modeling": contentModelingPost,
};

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("termstack-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

function App() {
  const [activeTermId, setActiveTermId] = useState<string | null>(
    "content-modeling",
  );
  const [activeCategory, setActiveCategory] = useState<TermCategory>("All");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activePostSlug, setActivePostSlug] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    if (activeCategory === "All") return terms;

    return terms.filter((term) => term.category === activeCategory);
  }, [activeCategory]);

  const activePost = activePostSlug ? postsBySlug[activePostSlug] : null;

  useEffect(() => {
    localStorage.setItem("termstack-theme", theme);
  }, [theme]);

  function handleCategoryChange(category: TermCategory) {
    setActiveCategory(category);
    setActiveTermId(null);
    setActivePostSlug(null);
  }

  function handleToggleTerm(id: string) {
    setActiveTermId((currentId) => (currentId === id ? null : id));
  }

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <main className="app" data-theme={theme}>
      <section className="glossary-shell" aria-labelledby="page-title">
        <div className="hero">
          <p className="eyebrow">TermStack</p>

          <h1 id="page-title">Terms worth learning deeply.</h1>

          <p className="intro">
            A simple glossary for CMS, frontend, SEO, content strategy, and
            AI-assisted workflow terms.
          </p>

          <ThemeToggle theme={theme} onToggleTheme={handleToggleTheme} />
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <TermList
          terms={filteredTerms}
          activeTermId={activeTermId}
          onToggleTerm={handleToggleTerm}
          onReadPost={setActivePostSlug}
        />

        {activePost && (
          <article className="post-preview">
            <button
              className="text-button"
              type="button"
              onClick={() => setActivePostSlug(null)}
            >
              Close article
            </button>

            <ReactMarkdown>{activePost}</ReactMarkdown>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
