import * as React from "react";

import Modal from "./Modal";

function App() {
  const [reveal, setReveal] = React.useState(false);

  return (
    <div>
      <h1>App 3</h1>

      <button onClick={() => setReveal(r => !r)}>Reveal modal</button>

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
