import React, { createContext, useState, useContext } from "react";
import "./styles.css"; // Import CSS for styling

// Creating ThemeContext
const ThemeContext = createContext();

// Custom Hook for Theme
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};