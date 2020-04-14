import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const RemoteProfile = lazy(() => import("app1/Profile"));
const RemoteFeed = lazy(() => import("app2/Feed"));
const RemoteAbout = lazy(() => import("app5/About"));
const RemoteRouter = lazy(() => import("app6/Router"));

function App() {
  return (
    <Router>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          height: "100%"
        }}
      >
        <nav
          style={{
            marginBottom: 24,
            width: "100%",
            maxWidth: 600,
            height: "100%",
            borderRight: "1px solid rgba(0,0,0,0.1)",
            flexDirection: "column",
            display: "flex"
          }}
        >
          <Link to="/" style={{ padding: "8px 16px", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/about"
            style={{ padding: "8px 16px", textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            to="/tos"
            style={{ padding: "8px 16px", textDecoration: "none" }}
          >
            Terms of service
          </Link>
          <Link
            to="/privacy"
            style={{ padding: "8px 16px", textDecoration: "none" }}
          >
            Privacy
          </Link>
        </nav>
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
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/" exact>
              <Profile />
            </Route>

            <Suspense fallback={"Loading remote routes..."}>
              <RemoteRouter />
            </Suspense>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Profile = () => (
  <>
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
    </Suspense>
  </>
);

const About = () => (
  <Suspense fallback="Loading About...">
    <RemoteAbout />
  </Suspense>
);

export default App;
