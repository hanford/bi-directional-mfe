import React, { Suspense } from "react";
import Feed from "./Feed";

const App = () => {
  return (
    <div>
      <h1>App 2</h1>

      <Suspense fallback="Loading feed">
        <Feed />
      </Suspense>
    </div>
  );
};

export default App;
