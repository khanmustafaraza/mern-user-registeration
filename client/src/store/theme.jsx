import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
