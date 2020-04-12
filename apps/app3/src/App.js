import * as React from "react";

import Modal from "./Modal";

function App() {
  const [reveal, setReveal] = React.useState(false);

  return (
    <div>
      <div>App 3</div>
      <button onClick={() => setReveal(r => !r)}>Reveal modal</button>

      {reveal && (
        <Modal>
          <div>
            Modal
            <button onClick={() => setReveal(r => !r)}>Dismiss</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
