import React from "react";
import ReactDOM from "react-dom";

const Modal_Style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(208, 208, 208)",
  transform: "translate(-50%, -50%)", // Center the modal more accurately
  zIndex: 1000,
  maxHeight: "90%",
  width: "100%",
  overflowY: "auto",
  borderRadius: "8px",
  padding: "20px",
  boxSizing: "border-box", // Ensure padding doesn't affect the width
};

const Overlay_Styles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

const CloseButton_Style = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  fontSize: "1.5rem",
  padding: "5px 10px",
  cursor: "pointer",
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={Overlay_Styles}>
        <div style={Modal_Style}>
          <button className="btn" style={CloseButton_Style} onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
