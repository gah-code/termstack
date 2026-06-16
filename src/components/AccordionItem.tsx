import type { Term } from "../content/terms";

type AccordionItemProps = {
  term: Term;
  isOpen: boolean;
  onToggle: () => void;
  onReadPost: (slug: string) => void;
};

export function AccordionItem({
  term,
  isOpen,
  onToggle,
  onReadPost,
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
              <button
                className="text-button"
                type="button"
                onClick={() => onReadPost(term.relatedPostSlug!)}
              >
                Read deeper
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
