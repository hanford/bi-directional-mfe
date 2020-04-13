import React, { Suspense } from "react";

import Profile from "./Profile";
import { Provider } from "./RelayEnvironment";
import ErrorBoundary from "./ErrorBoundary";

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
        fontFamily: "-apple-system, BlinkMacSystemFont"
      }}
    >
      <ErrorBoundary>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                width: "100%",
                minHeight: 200,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Loading...
            </div>
          }
        >
          <Profile />

          <ErrorBoundary>
            <Suspense fallback="Loading Feed...">
              <RemoteFeed />
            </Suspense>
          </ErrorBoundary>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
