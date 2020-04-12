import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Entry from "./App";
import { Provider } from "./RelayEnvironment";

ReactDOM.render(
  <Provider>
    <Entry />
  </Provider>,
  document.getElementById("root")
);
