import React, { Suspense } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Lazy load components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button className="toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Suspense fallback={<div className="loading">Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="loading">Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;