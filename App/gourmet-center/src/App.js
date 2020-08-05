
import React from "react";

/* PAGE ROUTING */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/* PAGES */
import addInventory from "./screens/addInventory";
import forecast from "./screens/forecast";
import inventory from "./screens/inventory";

/* SASS/SCSS STYLESHEET */
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={forecast} />
        <Route path="/addInventory" component={addInventory} />
        <Route path="/inventory" component={inventory} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
