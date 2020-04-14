import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import { AppRouter } from "./router";

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
      <Router>
        <nav
          style={{
            marginBottom: 24,
            width: "100%",
            maxWidth: 600,
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "space-between"
          }}
        >
          <h1>App 6</h1>
          <div>
            <Link
              to="/privacy"
              style={{
                padding: "8px 16px",
                textDecoration: "none"
              }}
            >
              Privacy
            </Link>
            <Link
              to="/tos"
              style={{ padding: "8px 0px 16px 8px", textDecoration: "none" }}
            >
              Terms of service
            </Link>
          </div>
        </nav>

        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
