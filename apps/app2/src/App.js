import React, { Suspense } from "react";

import Feed from "./Feed";

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
      <h1>App 2</h1>

      <Suspense fallback="Loading feed">
        <Feed />
      </Suspense>
    </div>
  );
};

export default App;
