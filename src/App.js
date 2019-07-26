import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Array from "./Array";
import Method from "./Method";
import String from  "./String"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/array" component={Array} />
        <Route exact path="/string" component={String} />
        <Route exact path="/methods" component={Method} />
      </Router>
    </div>
  );
}

export default App;
