import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import "./AppStyles.scss";
import EmotionAnalysis from "./screens/emotionAnalysis/EmotionAnalysis";
import Landing from "./screens/landing/Landing";
import Mapbox from "./components/Mapbox";

function App() {
  return (
    <div className="app__container">
      <div className="app__routes-wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/emotionAnalysis">
              <EmotionAnalysis />
            </Route>
            <Route path="/landing">
              <Landing />
            </Route>
            <Route path="/">
              <Mapbox />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
