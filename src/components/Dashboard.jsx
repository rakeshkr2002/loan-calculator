import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeCurrencyContext } from "../Context-api/ThemeCurrencyContext";
import "../css/Dashboard.css";
import useEMI from "../hooks/UseEMi";

const Dashboard = () => {
  const { theme } = useContext(ThemeCurrencyContext);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);

  const { emi, calculateEMI } = useEMI(loanAmount, interestRate, term); // Pass arguments directly

  const handleCalculate = () => {
    calculateEMI(); // Call function without arguments, as they are passed via hook
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div>
          <p>Loan Calculator Dashboard</p>
        </div>
        <div
          className="fields"
          style={{ color: theme === "dark" ? "#fafafa" : "#292e32" }}
        >
          <TextField
            required
            id="outlined-required"
            label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            color="primary"
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
        <div className="button">
          <Button variant="contained" onClick={handleCalculate}>
            Calculate
          </Button>
        </div>
      </div>

      <div
        className="emi-shown"
        style={{ color: theme === "dark" ? "#fafafa" : "#292e32" }}
      >
        {emi && (
          <div>
            <p>Monthly EMI: ${emi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
