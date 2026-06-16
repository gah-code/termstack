import { useEffect, useMemo, useState } from "react";
import { categories, terms, type TermCategory } from "./content/terms";
import { postsBySlug } from "./content/posts";
import { CategoryFilter } from "./components/CategoryFilter";
import { EmptyState } from "./components/EmptyState";
import { PostPreview } from "./components/PostPreview";
import { SearchInput } from "./components/SearchInput";
import { TermList } from "./components/TermList";
import { ThemeToggle } from "./components/ThemeToggle";

type Theme = "light" | "dark";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activePostSlug, setActivePostSlug] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return terms.filter((term) => {
      const matchesCategory =
        activeCategory === "All" || term.category === activeCategory;

      const searchableText = [
        term.title,
        term.shortDefinition,
        term.longDefinition,
        term.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activePost = activePostSlug ? postsBySlug[activePostSlug] ?? null : null;

  useEffect(() => {
    localStorage.setItem("termstack-theme", theme);
  }, [theme]);

  function handleCategoryChange(category: TermCategory) {
    setActiveCategory(category);
    setActiveTermId(null);
    setActivePostSlug(null);
  }

  function handleSearchChange(value: string) {
    setSearchQuery(value);
    setActiveTermId(null);
    setActivePostSlug(null);
  }

  function handleToggleTerm(id: string) {
    setActiveTermId((currentId) => (currentId === id ? null : id));
  }

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function handleResetFilters() {
    setActiveCategory("All");
    setSearchQuery("");
    setActiveTermId("content-modeling");
    setActivePostSlug(null);
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

        <SearchInput
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        <p className="result-summary" aria-live="polite">
          Showing {filteredTerms.length} of {terms.length} terms
        </p>

        {filteredTerms.length > 0 ? (
          <TermList
            terms={filteredTerms}
            activeTermId={activeTermId}
            onToggleTerm={handleToggleTerm}
            onReadPost={setActivePostSlug}
          />
        ) : (
          <EmptyState searchQuery={searchQuery} onReset={handleResetFilters} />
        )}

        <PostPreview post={activePost} onClose={() => setActivePostSlug(null)} />
      </section>
    </main>
  );
}

export default App;
