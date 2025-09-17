import React, { useState } from 'react';
import './styles.css'

// ✅ Export this so it can be tested 
export const checkPasswordStrength = (password) => {
  if (password === "") return "Weak Password";

  let isUpperCase = false;
  let isLowerCase = false;
  let isNumber = false;
  let isSplChar = false;
  let passLength = password.length >= 8;
  let count = 0;

  for (let i = 0; i < password.length; i++) {
    let code = password.charCodeAt(i);
    if (code >= 65 && code <= 90) isUpperCase = true;
    else if (code >= 97 && code <= 122) isLowerCase = true;
    else if (code >= 48 && code <= 57) isNumber = true;
    else isSplChar = true;
  }

  if (isUpperCase) count++;
  if (isLowerCase) count++;
  if (isNumber) count++;
  if (isSplChar) count++;
  if (passLength) count++;

  if (count < 2) return "Level 1";
  if (count === 2 || count === 3) return "Level 2";
  if (count >= 4) return "Level 3";   // covers both 4 and 5
  return "Weak Password"; // fallback
};

const PasswordStrength = () => {
  const [value, setValue] = useState("");
  const [strength, setStrength] = useState("");

  const handleSavePassword = () => {
    let result = checkPasswordStrength(value);
    setStrength(result);
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        placeholder="Enter password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="password"
      />
      <button onClick={handleSavePassword}>Check Strength</button>
      <p>Strength : <span>{strength}</span></p> 
    </div>
  );
};

export default PasswordStrength;
