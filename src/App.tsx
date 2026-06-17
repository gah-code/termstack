import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GlossaryPage } from "./pages/GlossaryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostPage } from "./pages/PostPage";

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
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("termstack-theme", theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <main className="app" data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <GlossaryPage theme={theme} onToggleTheme={handleToggleTheme} />
          }
        />

        <Route
          path="/posts/:slug"
          element={<PostPage theme={theme} onToggleTheme={handleToggleTheme} />}
        />

        <Route
          path="*"
          element={
            <NotFoundPage theme={theme} onToggleTheme={handleToggleTheme} />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
