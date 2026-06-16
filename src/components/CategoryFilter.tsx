import type { TermCategory } from "../content/terms";

type CategoryFilterProps = {
  categories: TermCategory[];
  activeCategory: TermCategory;
  onCategoryChange: (category: TermCategory) => void;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="category-list" aria-label="Filter terms by category">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "category-button is-active"
              : "category-button"
          }
          type="button"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
