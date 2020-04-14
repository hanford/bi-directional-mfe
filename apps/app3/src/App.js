import * as React from "react";

import Modal from "./Modal";

function App() {
  const [reveal, setReveal] = React.useState(false);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 80,
        fontFamily: "-apple-system, BlinkMacSystemFont"
      }}
    >
      <h1>App 3</h1>

      <button
        style={{
          padding: "16px 24px",
          backgroundColor: "#984cd2",
          color: "white",
          fontSize: 18,
          borderRadius: 6,
          border: 0,
          cursor: "pointer",
          outline: "none"
        }}
        onClick={() => setReveal(r => !r)}
      >
        Reveal modal
      </button>

      {reveal && (
        <Modal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <div>Modal</div>
            <button onClick={() => setReveal(r => !r)}>Dismiss</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
