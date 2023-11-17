import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store/index";
import Routing from "../pages";

import "./global.scss";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </HashRouter>
  );
}

export default App;
