import React from "react";
import { preloadQuery, usePreloadedQuery, graphql } from "react-relay/hooks";

import Environment, { Provider } from "./RelayEnvironment";

const query = graphql`
  query ProfileQuery {
    viewer {
      user {
        name
        title
      }
    }
  }
`;

const variables = {};

const result = preloadQuery(Environment, query, variables, {
  fetchPolicy: "store-or-network"
});

function Profile() {
  const data = usePreloadedQuery(query, result);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: 600,
        maxWidth: "100%",
        background: "aliceblue",
        padding: 20,
        marginBottom: 20,
        borderRadius: 6,
        position: "relative"
      }}
    >
      <img
        src="https://place-hold.it/120"
        style={{
          maxWidth: "100%",
          borderRadius: "50%",
          height: 120,
          width: 120
        }}
      />

      <h1 style={{ marginBottom: 16 }}>{data.viewer.user.name || "No name"}</h1>
      <h2 style={{ marginTop: 0 }}>{data.viewer.user.title || "No title"}</h2>

      <div style={{ position: "absolute", bottom: 8, right: 8 }}>
        App1/Profile.js
      </div>
    </div>
  );
}

export default () => (
  <Provider>
    <Profile />
  </Provider>
);
