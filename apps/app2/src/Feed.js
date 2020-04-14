import React, { Suspense } from "react";
import { useLazyLoadQuery, graphql } from "react-relay/hooks";

import { Provider } from "./RelayEnvironment";

const Modal = React.lazy(() => import("app3/Modal"));

function Feed() {
  const [showRemoteModal, setShowRemoteModal] = React.useState(false);

  const data = useLazyLoadQuery(
    graphql`
      query FeedQuery {
        viewer {
          id
          allFeedPosts {
            edges {
              node {
                title
                content
              }
            }
          }
        }
      }
    `
  );

  const connection = cleanConnection(data.viewer.allFeedPosts);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "100%",
          maxWidth: 600,
          background: "bisque",
          padding: 20,
          borderRadius: 6,
          position: "relative"
        }}
      >
        {connection.map(({ title, content }, index) => (
          <div
            key={title}
            role="button"
            onClick={() => {
              setShowRemoteModal(true);
            }}
            style={{
              width: "100%",
              marginBottom: 8,
              paddingBottom: 8,
              cursor: "pointer",
              borderBottom:
                connection.length - 1 !== index
                  ? "1px solid rgba(0,0,0,0.1)"
                  : ""
            }}
          >
            <div>{title}</div>
            <div>{content}</div>
          </div>
        ))}
        <div style={{ position: "absolute", bottom: 8, right: 8 }}>
          App2/Feed.js
        </div>
      </div>

      {showRemoteModal && (
        <Suspense fallback="Loading modal...">
          <Modal>
            <div
              style={{
                display: "flex",

                justifyContent: "space-between"
              }}
            >
              <div style={{ flex: 1 }}>App3/Modal</div>

              <button onClick={() => setShowRemoteModal(s => !s)}>
                Dismiss modal
              </button>
            </div>
          </Modal>
        </Suspense>
      )}
    </>
  );
}

// Wrap feed with provider, so when shared, module has relay ctx
export default () => (
  <Provider>
    <Feed />
  </Provider>
);

const cleanConnection = connection => {
  return connection.edges.map(f => f.node);
};
