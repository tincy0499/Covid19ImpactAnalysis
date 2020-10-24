import React from "react";

import DashboardContainer from "./screens/dashboard/DashboardContainer";
import "./AppStyles.scss";

function App() {
  return (
    <div className="app__container">
      <div className="app__routes-wrapper">
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
