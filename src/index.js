import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store} from './store.js'

import { Provider } from "react-redux";
//import rootReducer from "./redux/reducers";

// eslint-disable-next-line
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);