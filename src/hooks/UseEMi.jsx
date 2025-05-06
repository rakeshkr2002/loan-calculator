import { useState } from "react";

const useEMI = (loanAmount, interestRate, termYears) => {
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(termYears) * 12;
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    setEmi(EMI.toFixed(2));
  };

  return { emi, calculateEMI };
};

export default useEMI;