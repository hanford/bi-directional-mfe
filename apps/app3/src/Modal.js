import * as React from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(0,0,0,0.5)",
        display: "grid",
        placeItems: "center"
      }}
    >
      <div
        style={{
          padding: 16,
          backgroundColor: "lavender",
          borderRadius: 6,
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
          minHeight: 300,
          minWidth: 300
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
