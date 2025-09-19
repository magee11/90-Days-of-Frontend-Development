import React, { useState } from 'react';

function AgeCalculator() {
  const [date, setDate] = useState("");
  const [diff, setDiff] = useState(null);
  const [error, setError] = useState("");

  const handleFindBirthDay = () => {
    if (!date) {
      setError("Please select a date"); // ✅ match test expectation
      setDiff(null);
      return;
    }

    let dob = new Date(date);
    let current = new Date();

    if (dob > current) {
      setError("Birthdate cannot be in the future.");
      setDiff(null);
      return;
    }

    setError("");

    let years = current.getFullYear() - dob.getFullYear();
    let months = current.getMonth() - dob.getMonth();
    let days = current.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      let prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setDiff({ year: years, month: months, day: days });
  };

  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2> {/* ✅ meaningful heading */}
      <label
        className="label"
        htmlFor="birthdate"
        data-testid="label-birthdate"  // ✅ added testid
      >
        Enter/Select a birthdate:
      </label>
      <input
        id="birthdate"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input-date"
        data-testid="input-birthdate"
      />
      <button
        className="btn-calc"
        onClick={handleFindBirthDay}
        data-testid="btn-calculate"
      >
        Calculate Age
      </button>

      {/* Error state */}
      {error && (
        <p className="error-msg" data-testid="error-msg" style={{ color: "red" }}>
          {error}
        </p>
      )}

      {/* Age result */}
      {diff && (
        <p className="age-result" data-testid="age-result">
          You are {diff.year} years, {diff.month} months, and {diff.day} days old.
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;
