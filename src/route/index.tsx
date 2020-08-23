import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LayoutWrapper } from "../component";
import NotFound from "./NotFound";
import { Post, Group } from "../screen";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <LayoutWrapper>
          <Switch>
            <Route path="/posts">
              <Post />
            </Route>
            <Route path="/groups">
              <Group />
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
