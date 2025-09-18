import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [error, setError] = useState(""); // ✅ error state

  function handleColor() {
    let hexCode = colorNameToHex(color.trim().toLowerCase());
    if (hexCode) {
      setHex(hexCode);
      setError(""); // clear error if found
    } else {
      setHex("");
      setError("Sorry, I couldn't recognize that color.");
    }
  }

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
        />
        <button data-testid="search-button" onClick={handleColor}>
          🔍
        </button>
      </div>

      <div className="color-box" data-testid="color-box">
        {hex ? (
          <>
            <div
              className="preview-circle"
              role="presentation"
              data-testid="color-preview"
              style={{
                background: hex,
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "2px solid #333",
                margin: "10px auto"
              }}
            ></div>
            <p data-testid="color-name">
              <strong>Name: {color}</strong>
            </p>
            <p data-testid="color-hex">
              <strong>Hex: {hex}</strong>
            </p>
          </>
        ) : (
          error && (
            <p
              data-testid="error-message"
              style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}
            >
              {error}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default ColorExplorer;
