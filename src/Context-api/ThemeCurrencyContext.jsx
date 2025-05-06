import React, { createContext, useState, useEffect } from "react";

export const ThemeCurrencyContext = createContext();

export const ThemeCurrencyProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [currency, setCurrency] = useState("USD");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  

  const changeCurrency = (newCurrency) => setCurrency(newCurrency);

  
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
    document.body.style.color = theme === "dark" ? "white" : "black";
  }, [theme]);

  return (
    
        <ThemeCurrencyContext.Provider value={{ theme, toggleTheme, currency, changeCurrency }}>
          <div style={{ backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black", minHeight: "100vh" }}>
            {children}
          </div>
        </ThemeCurrencyContext.Provider>
      
  );
};