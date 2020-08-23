import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LayoutWrapper } from "../component";
import NotFound from "./NotFound";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <LayoutWrapper>
          <Switch>
            <Route path="/posts">
              <p>Something here is a content</p>
            </Route>
            <Route path="/groups">
              <div>Users</div>
            </Route>
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </LayoutWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
