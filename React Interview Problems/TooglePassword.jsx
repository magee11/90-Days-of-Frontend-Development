import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={isVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label" >
        Password {isVisible ? "Visible" : "Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
