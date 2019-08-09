import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Array from "./Array";
import Method from "./Method";
import String from "./String";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/array" component={Array} />
        <Route path="/string" component={String} />
        <Route path="/methods" component={Method} />
      </Router>
    </div>
  );
}

export default App;
