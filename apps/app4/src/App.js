import React, { Suspense, lazy } from "react";

const RemoteProfile = lazy(() => import("app1/Profile"));
const RemoteFeed = lazy(() => import("app2/Feed"));
const RemoteAbout = lazy(() => import("app5/About"));

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
        <RemoteProfile />

        <Suspense fallback="Loading Feed...">
          <RemoteFeed />
        </Suspense>

        <Suspense fallback="Loading About...">
          <RemoteAbout />
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;
