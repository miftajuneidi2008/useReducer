import "./modal.css";
import React from "react";
export default function Modal({ modalContent }) {
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
}
