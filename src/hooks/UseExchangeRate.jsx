import { useState, useEffect } from "react";
import axios from "axios";

const useExchangeRate = (currency) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/ad0c38c6bfd2a551a30044e9/latest/USD`)
      .then((response) => setRate(response.data.conversion_rates))
      .catch((error) => console.error("Error fetching exchange rates", error));
  }, [currency]);

  return rate;
};

export default useExchangeRate;