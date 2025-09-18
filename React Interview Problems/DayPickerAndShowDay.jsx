import React, { useState } from 'react';
import "./styles.css";

export default function GetWeekday() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const getdate = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let num = new Date(date).getDay(); // ✅ getDay() returns 0-6
    setDay(days[num]);
  };

  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        data-testid="date-input"
      />
      <button data-testid="find-day-btn" onClick={getdate}>
        Find Day
      </button>
      {day && (
        <div data-testid="result">
          That date falls on {day}!
        </div>
      )}
    </div>
  );
}
