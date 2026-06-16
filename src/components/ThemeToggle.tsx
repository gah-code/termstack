type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggleTheme}>
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
