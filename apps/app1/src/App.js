import React, { Suspense } from "react";

import Profile from "./Profile";
import { Provider } from "./RelayEnvironment";

const RemoteFeed = React.lazy(() => import("app2/Feed"));

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 80,
        fontFamily: "-apple-system, BlinkMacSystemFont",
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              width: "100%",
              minHeight: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        }
      >
        <Profile />

        <Suspense fallback="Loading Feed...">
          <RemoteFeed />
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;
