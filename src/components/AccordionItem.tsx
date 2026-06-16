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
  return (
    <article className={isOpen ? "term-card is-open" : "term-card"}>
      <button
        className="term-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${term.id}-panel`}
        onClick={onToggle}
      >
        <span>{term.title}</span>

        <span className="term-icon" aria-hidden="true">
          {isOpen ? "x" : "+"}
        </span>
      </button>

      <div id={`${term.id}-panel`} className="term-panel" role="region">
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
