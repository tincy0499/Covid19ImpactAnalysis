import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import mapboxgl from 'mapbox-gl';

import App from "./App";

import "./index.css";
import "semantic-ui-css/semantic.min.css";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuaWs5Nm0iLCJhIjoiY2tod3hlY2VzMGN5ZDM3bmJkaHk3NHEwMSJ9.DEXgrqgXhX7RjW64ROsqhQ';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
