import React from "react";
import Header from "./Header";
import "./Method.css";
import Editor from "./Editor";

class Method extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const method = this.props.location.state.method;
    console.log(method)
    return (
      <>
        <Header />
        <div className="wrapper">
          <h1>{method.method}</h1>
          <h4>Syntax:</h4>
          <code>
            {method.syntax}
            <br />
            {method.syntax1}
            <br />
            {method.syntax2}
          </code>
          <h4>Parameter:</h4>
          <p>{method.parameter}</p>
          <h4>Return:</h4>
          <p>
            {method.return}
          </p>
          <h4>Summary</h4>
          <p>{method.summary}</p>
        </div>
        <Editor />
      </>
    );
  }
}

export default Method;
