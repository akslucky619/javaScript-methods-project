import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path="/string" component={String} />
     </Router>
    </div>
  );
}

export default App;
