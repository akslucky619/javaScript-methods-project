import React from "react";
import $ from "jquery";
import "./Editor.css";

class Editor extends React.Component {
  componentDidMount() {
    updateOutput();
  }
  render() {
    return (
      <div className="abcd">
        {/* <div id="topbar">
                    <h2 id="logo">Code Player</h2>
                </div> */}
        <div id="accordion">
          <h3 className="lang-heading">HTML</h3>
          <textarea
            name
            id="html"
            cols={30}
            rows={10}
            onChange={updateOutput}
            defaultValue={
              "<h1>Hello world!</h1>\n\n<p>Write your code in the left side, click on the HTML, CSS, JS to move b/w pannels.</p>"
            }
          />
          <h3 className="lang-heading">CSS</h3>
          <textarea
            name
            id="css"
            cols={30}
            rows={10}
            onChange={updateOutput}
            defaultValue={
              "h1, \np {\n    text-align: center;\n    font-weight: bold;\n    font-family: sans-serif;\n}\n\nh1 {\n    color: red;\n}"
            }
          />
          <h3 className="lang-heading">JAVA SCRIPT</h3>
          <textarea
            name
            id="js"
            cols={30}
            rows={10}
            defaultValue={""}
            onChange={updateOutput}
          />
        </div>
        <iframe title="editor" frameBorder={0} id="output" />
      </div>
    );
  }
}

function updateOutput() {
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<html><head><style type='text/css'>" +
        $("#css").val() +
        "</style></head><body>" +
        $("#html").val() +
        "</body></html>"
    );
  //document.querySelector("iframe").innerHTML = `<html><head><style type='text/css'>" + ${document.querySelector("#css").value} + "</style></head><body>" + $("#html").val() + "</body></html>`;

  document.getElementById("output").contentWindow.eval($("#js").val()); // Running JS inside iframe (security issues for real sites.)
  console.log("Hello!");
}

export default Editor;
