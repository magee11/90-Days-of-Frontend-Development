import { useState } from 'react';

function CharacterCount() {
  const [length, setLength] = useState(50); // Default length
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="1"
              max="1000"
              data-testid="maxlength"
              value={length}
              onChange={(e) => setLength(Number(e.target.value) || 50)}
            />
          </label>
        </div>

        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          value={text}
          onChange={handleChange}
        ></textarea>

        <div className="char-info" data-testid="char-info">
          {text.length} / {length}
        </div>

        <div className="warnings">
          {text.length > length ? (
            <p className="error-message" data-testid="error-text">
              {`Limit exceeded by ${text.length - length} characters`}
            </p>
          ) : text.length >= 0.9 * length ? (
            <p className="warning-text" data-testid="warning-text">
              You are close to the limit!
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CharacterCount;
