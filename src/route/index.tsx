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
import { AppRoutes } from "./type";
import "../i18n";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <LayoutWrapper>
          <Switch>
            <Route path={`/${AppRoutes.POSTS}`}>
              <Post />
            </Route>
            <Route path={`/${AppRoutes.GROUPS}`}>
              <Group />
            </Route>
            <Route exact path="/">
              <Redirect to={`/${AppRoutes.POSTS}`} />
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
