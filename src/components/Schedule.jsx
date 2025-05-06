import React, { useContext, useState } from "react";
import "../css/schedule.css"; 
import { ThemeCurrencyContext } from "../Context-api/ThemeCurrencyContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import useEMI from "../hooks/UseEMi";

const Schedule = ({ schedule = [] ,emi}) => {
  const [isVisible, setIsVisible] = useState(true);
  const { theme, currency, changeCurrency } = useContext(ThemeCurrencyContext);
 

  const currencies = ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"];

  if (!schedule.length) return <p></p>;

  return (
    <>
      {isVisible && (
        <>
        <div className="emi-shown">
                 
                    <div>
                      <p>Monthly EMI: ${emi}</p>
                    </div>
                 
                </div>
          <div
            className="schedule-currency"
            style={{ backgroundColor: theme === "dark" ? "#292e32" : "#ffffff" }}
          >
            <div>
              <TextField
                select
                label="Currency"
                value={currency}
                onChange={(e) => changeCurrency(e.target.value)}
                variant="outlined"
              >
                {currencies.map((cur) => (
                  <MenuItem key={cur} value={cur}>
                    {cur}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  
                  setIsVisible(false); // Hide schedule
                }}
              >
                Reset Table
              </Button>
            </div>
          </div>

          <div
            className="schedule-header"
            style={{
              backgroundColor: theme === "dark" ? "#292e32" : "#ffffff",
            }}
          >
            <h3>Amortization Schedule ({currency})</h3>
          </div>

          <div className="schedule-container">
            <div
              className="schedule-table"
              style={{
                backgroundColor: theme === "dark" ? "#292e32" : "#ffffff",
              }}
            >
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map(({ month, principal, interest, remainingBalance }) => (
                    <tr key={month}>
                      <td>{month}</td>
                      <td>{principal} {currency}</td>
                      <td>{interest} {currency}</td>
                      <td>{remainingBalance} {currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Schedule;
