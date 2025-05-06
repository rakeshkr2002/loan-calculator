import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeCurrencyContext } from "../Context-api/ThemeCurrencyContext";
import "../css/Dashboard.css";
import useEMI from "../hooks/UseEMi";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Schedule from "./Schedule";

const Dashboard = () => {
  const { theme } = useContext(ThemeCurrencyContext);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const {  emi,schedule,calculateEMI } = useEMI();

  const handleCalculate = () => {

    calculateEMI(loanAmount, interestRate, term);
  };

 
  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === "dark" ? "#0a6fc8" : "#0a6fc8",
      },
      background: {
        default: theme === "dark" ? "#121212" : "#ffffff",
        paper: theme === "dark" ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: theme === "dark" ? "#fafafa" : "#292e32",
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="dashboard-container">
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
              variant="outlined"
              color="primary"
              sx={{ input: { color: muiTheme.palette.text.primary } }}
            />
            <TextField
              required
              id="outlined-required"
              label="Interest Rate (%)"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              variant="outlined"
              color="primary"
              sx={{ input: { color: muiTheme.palette.text.primary } }}
            />
            <TextField
              required
              id="outlined-required"
              label="Term (years)"
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              variant="outlined"
              color="primary"
              sx={{ input: { color: muiTheme.palette.text.primary } }}
            />
          </div>
          <div className="button">
            <Button variant="contained" onClick={handleCalculate}>
              Calculate
            </Button>
          </div>
        </div>

        
      </div>
      <Schedule schedule={schedule} emi={emi} />
      </ThemeProvider>
  );
};

export default Dashboard;