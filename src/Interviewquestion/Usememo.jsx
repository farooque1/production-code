import React, { useState, useMemo } from "react";

const ExpensiveCalculationComponent = ({ number }) => {

    // Expensive calculation function
  const expensiveCalculation = (number) => {
    console.log("Calculating...");
    // Simulate an expensive calculation (e.g., factorial calculation)
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  };

  // Memoize the expensive calculation result using useMemo
  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);
  console.log(memoizedResult);
  return (
    <div>
      <h1>Expensive Calculation Component</h1>
      <p>Number: {number}</p>
      <p>Result: {memoizedResult}</p>
    </div>
  );
};

const MemoExample = () => {
  const [inputNumber, setInputNumber] = useState(5);

  const handleInputChange = (e) => {
    setInputNumber(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <input type="number" value={inputNumber} onChange={handleInputChange} />
      <ExpensiveCalculationComponent number={inputNumber} />
    </div>
  );
};

export default MemoExample;
