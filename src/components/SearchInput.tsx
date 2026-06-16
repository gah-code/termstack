type SearchInputProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function SearchInput({
  searchQuery,
  onSearchChange,
}: SearchInputProps) {
  return (
    <div className="search-shell">
      <label className="search-label" htmlFor="term-search">
        Search terms
      </label>

      <input
        id="term-search"
        className="search-input"
        type="search"
        value={searchQuery}
        placeholder="Search CMS, SEO, frontend, AI workflows..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}
