import React, { useState } from 'react';
import './styles.css';

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? `container dark-mode` : `container light-mode`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          {/* bind checkbox to state */}
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
          <span className="slider round"></span>
        </label>
        {/* Display text for tests */}
        <span className="mode-text">
          {dark ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
