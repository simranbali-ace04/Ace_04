import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
  setIsDarkMode((prev) => !prev);
};

  useEffect(() => {
    window.document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]); 
  
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
