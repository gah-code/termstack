import { useMemo, useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { EmptyState } from "../components/EmptyState";
import { SearchInput } from "../components/SearchInput";
import { TermList } from "../components/TermList";
import { ThemeToggle } from "../components/ThemeToggle";
import { categories, terms, type TermCategory } from "../content/terms";

type GlossaryPageProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function GlossaryPage({ theme, onToggleTheme }: GlossaryPageProps) {
  const [activeTermId, setActiveTermId] = useState<string | null>(
    "content-modeling",
  );
  const [activeCategory, setActiveCategory] = useState<TermCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  function handleCategoryChange(category: TermCategory) {
    setActiveCategory(category);
    setActiveTermId(null);
  }

  function handleSearchChange(value: string) {
    setSearchQuery(value);
    setActiveTermId(null);
  }

  function handleToggleTerm(id: string) {
    setActiveTermId((currentId) => (currentId === id ? null : id));
  }

  function handleResetFilters() {
    setActiveCategory("All");
    setSearchQuery("");
    setActiveTermId("content-modeling");
  }

  return (
    <section className="glossary-shell" aria-labelledby="page-title">
      <div className="hero">
        <p className="eyebrow">TermStack</p>

        <h1 id="page-title">Terms worth learning deeply.</h1>

        <p className="intro">
          A simple glossary for CMS, frontend, SEO, content strategy, and
          AI-assisted workflow terms.
        </p>

        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
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
        />
      ) : (
        <EmptyState searchQuery={searchQuery} onReset={handleResetFilters} />
      )}
    </section>
  );
}
