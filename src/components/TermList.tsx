import type { Term } from "../content/terms";
import { AccordionItem } from "./AccordionItem";

type TermListProps = {
  terms: Term[];
  activeTermId: string | null;
  onToggleTerm: (id: string) => void;
};

export function TermList({
  terms,
  activeTermId,
  onToggleTerm,
}: TermListProps) {
  return (
    <div className="term-list">
      {terms.map((term) => (
        <AccordionItem
          key={term.id}
          term={term}
          isOpen={activeTermId === term.id}
          onToggle={() => onToggleTerm(term.id)}
        />
      ))}
    </div>
  );
}
