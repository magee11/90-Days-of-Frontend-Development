import React, { useState } from 'react';
import "./styles.css";

function EvenOrOddChecker() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false)



  const handleCheck = () => {
    setLoading(true);

    const num = Number(value);

    setTimeout(() => {
      if (isNaN(num) || num === 0) {
        setContent("Please enter a valid number.");
      } else if (num % 2 === 0) {
        setContent(`The number ${num} is even.`);
      } else {
        setContent(`The number ${num} is odd.`);
      }
      setLoading(false);
    }, 500);
  }
  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        data-testid="number-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />

      <button className="check-button" data-testid="check-button" onClick={handleCheck}>Check</button>

      <div className="result-area">
        {isLoading ? (
          <div className="loading" data-testid="loading">Checking...</div>
        ) : (
          <div className="result" data-testid="result">{content}</div>
        )}
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
