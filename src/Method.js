import React from 'react';
import "./Method.css";

class Method extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <h1>Array.prototype.filter()</h1>
  <h4>Syntax:</h4>
  <code>
    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction',
    'present'];
    <br />
    const result = words.filter(word =&gt; word.length &gt; 6);
    <br />
    console.log(result);
    <br />
    // expected output: Array ["exuberant", "destruction", "present"]
  </code>
  <h4>Parameter:</h4>
  <p>1. Callback(element, index, array), thisArg</p>
  <h4>Return:</h4>
  <p>
    A new Array with filtered elements.If no elements pass the test, an empty
    array will be returned.
  </p>
  </div>
        )
    }
}

export default Method