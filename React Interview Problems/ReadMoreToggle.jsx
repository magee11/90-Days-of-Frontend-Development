import React, { useState } from "react";
import "./styles.css";

function ReadMoreToggle() {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

  // Limit for collapsed state
  const previewText = text.slice(0, 120) + "...";

  function toggleReadMore() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>

      <p className="readmore-text" data-testid="readmore-text">
        {isExpanded ? text : previewText}
      </p>

      <button
        className="readmore-button"
        data-testid="readmore-button"
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;
