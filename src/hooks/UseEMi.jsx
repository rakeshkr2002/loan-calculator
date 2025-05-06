import { useState } from "react";

const useEMI = () => {

  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = (loanAmount,interestRate,termYears) => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(termYears) * 12;
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    setEmi(EMI.toFixed(2));
    generateSchedule(EMI, N, R, P);
  };

  const changeemi = (newEmi) => {
    setEmi(newEmi);
    setSchedule([]);
  };
  const generateSchedule = (emi, months, monthlyRate, loanAmount) => {
    let balance = loanAmount;
    let scheduleData = [];

    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;
      scheduleData.push({
        month,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        remainingBalance: balance.toFixed(2),
      });
    }

    setSchedule(scheduleData);
  };

  return {
    emi,
    setEmi,
    schedule,
    changeemi,
    calculateEMI,
  };
};

export default useEMI;