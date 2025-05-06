import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeCurrencyContext } from "../Context-api/ThemeCurrencyContext";
import useExchangeRate from "../hooks/UseExchangeRate";
import "../css/Dashboard.css";

const Dashboard = () => {
  const { currency } = useContext(ThemeCurrencyContext);
  const exchangeRates = useExchangeRate(currency);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [emi, setEmi] = useState(null);
  const [convertedEmi, setConvertedEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(term) * 12;
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    setEmi(EMI.toFixed(2));

    if (exchangeRates && exchangeRates["INR"]) {
      setConvertedEmi((EMI * exchangeRates[currency] / exchangeRates["INR"]).toFixed(2));
    }
  };

  return (
    <div className="dashboard">
      <div>
        <p>Loan Calculator Dashboard</p>
      </div>
      <div className="fields">
        <TextField
          required
          id="outlined-required"
          label="Loan Amount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Term (years)"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={calculateEMI}>
          Calculate
        </Button>
      </div>
      {emi && (
        <div>
          <p>Monthly EMI: ₹{emi}</p>
          {convertedEmi && <p>Converted EMI: {currency} {convertedEmi}</p>}
        </div>
      )}
    </div>
  );
};

export default Dashboard;