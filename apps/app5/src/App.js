import React from "react";

import About from "./About";

const App = () => {
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
      <h1>App 5</h1>

      <About />
    </div>
  );
};

export default App;
