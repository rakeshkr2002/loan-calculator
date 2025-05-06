import React, { createContext, useState } from "react";

export const ThemeCurrencyContext = createContext();

export const ThemeCurrencyProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [currency, setCurrency] = useState("INR");

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const changeCurrency = (newCurrency) => setCurrency(newCurrency);

  return (
    <ThemeCurrencyContext.Provider value={{ theme, toggleTheme, currency, changeCurrency }}>
      {children}
    </ThemeCurrencyContext.Provider>
  );
};