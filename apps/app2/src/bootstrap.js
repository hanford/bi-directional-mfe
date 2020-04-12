import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "./RelayEnvironment";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
