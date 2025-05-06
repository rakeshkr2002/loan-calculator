import React, { useContext } from "react";
import { ThemeCurrencyContext } from "../Context-api/ThemeCurrencyContext";
import useExchangeRate from "../hooks/UseExchangeRate";

const ExchangeRates = () => {
  const { currency } = useContext(ThemeCurrencyContext);
  const exchangeRates = useExchangeRate(currency);

  return (
    <div>
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