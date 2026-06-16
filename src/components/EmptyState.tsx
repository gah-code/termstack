type EmptyStateProps = {
  searchQuery: string;
  onReset: () => void;
};

export function EmptyState({ searchQuery, onReset }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <p className="empty-state-kicker">No matching terms</p>

      <h2>Nothing surfaced for “{searchQuery}”.</h2>

      <p>
        Try a broader word, clear the search, or switch back to all categories.
      </p>

      <button className="theme-toggle" type="button" onClick={onReset}>
        Reset filters
      </button>
    </div>
  );
}
