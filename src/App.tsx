import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./route/home/controller/HomeController";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
