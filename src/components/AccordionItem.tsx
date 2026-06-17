import { Link } from "react-router-dom";
import type { Term } from "../content/terms";

type AccordionItemProps = {
  term: Term;
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({
  term,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const triggerId = `${term.id}-trigger`;
  const panelId = `${term.id}-panel`;

  return (
    <article className={isOpen ? "term-card is-open" : "term-card"}>
      <button
        id={triggerId}
        className="term-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{term.title}</span>

        <span className="term-icon" aria-hidden="true">
          {isOpen ? "×" : "+"}
        </span>
      </button>

      <div
        id={panelId}
        className="term-panel"
        role="region"
        aria-labelledby={triggerId}
      >
        <div className="term-content">
          <p>{term.shortDefinition}</p>

          {term.longDefinition && <p>{term.longDefinition}</p>}

          <div className="term-meta">
            <span>{term.category}</span>

            {term.relatedPostSlug && (
              <Link
                className="text-button"
                to={`/posts/${term.relatedPostSlug}`}
              >
                Read deeper
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
