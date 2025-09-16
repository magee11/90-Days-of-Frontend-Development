import React, { useState } from "react";
import "./styles.css";

function ConfirmationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleConfirm() {
    setStatus("✅ Action Confirmed!");
    closeModal();
  }

  function handleCancel() {
    setStatus("❌ Action Cancelled!");
    closeModal();
  }

  return (
    <div className="modal-container">
      {/* Open button */}
      <button className="open-modal-btn" onClick={openModal}>
        Open Confirmation Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2 className="modal-title">Confirm Action</h2>
            <p className="modal-message">
              Are you sure you want to proceed?
            </p>

            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleConfirm}>
                Confirm
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Message */}
      <div className="action-status">{status}</div>
    </div>
  );
}

export default ConfirmationModal;
