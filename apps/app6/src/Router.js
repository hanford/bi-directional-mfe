import React from "react";
import { Switch, Route } from "react-router-dom";

import Privacy from "./Privacy";
import Terms from "./TermsOfService";

export default function Router() {
  return (
    <>
      <Route path="/tos">
        <Terms />
      </Route>
      <Route path="/privacy">
        <Privacy />
      </Route>
    </>
  );
}

export function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact>
        <Privacy />
      </Route>

      <Router />
    </Switch>
  );
}
