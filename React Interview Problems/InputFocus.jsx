import React from 'react';

function InputFocus() {
  const handleFocus = () => {
    document.getElementById("input").focus();
  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        id="input"
        type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button style={{ padding: '8px 12px' }} onClick={() => handleFocus()}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
