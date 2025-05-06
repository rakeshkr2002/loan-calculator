import React, { useContext } from "react";
import { ThemeCurrencyContext } from "../Context-api/ThemeCurrencyContext";
import useExchangeRate from "../hooks/UseExchangeRate";
import "../css/echangeRates.css"
const ExchangeRates = () => {
  const { currency } = useContext(ThemeCurrencyContext);
  const exchangeRates = useExchangeRate(currency);

  return (
    <div className="exchange-rates">
      <h3>Exchange Rates for {currency}</h3>
      {exchangeRates && Object.keys(exchangeRates).map((key) => (
        <p key={key}>
          {key}: {exchangeRates[key]}
        </p>
      ))}
    </div>
  );
};

export default ExchangeRates;