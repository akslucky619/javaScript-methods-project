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
          <h1 className="method-title">{method.method}</h1>
          <h4 className="method-heading">Syntax:</h4>
            <code>
              <p className="syntax">{method.syntax}</p>
              <br />
              <p className="syntax">{method.syntax1}</p>
              <br />
              <p className="syntax">{method.syntax2}</p>
            </code>
          <h4 className="method-heading">Parameter:</h4>
            <p className="method-para">{method.parameter}</p>
          <h4 className="method-heading">Return:</h4>
            <p className="method-para">
              {method.return}
            </p>
          <h4 className="method-heading">Summary</h4>
            <p className="method-para">{method.summary}</p>
        </div>
        <Editor />
      </>
    );
  }
}

export default Method;
