import React from "react";
import { Link } from "react-router-dom";
import "./Main.css"

class Array extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    methods: []
  };

  componentDidMount = () => {
    fetch(
      "https://raw.githubusercontent.com/akslucky619/js-methods/master/arr.json"
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({ methods: myJson });
      });
  };

  render() {
    //   console.log(this.state.methods)
    const methods = this.state.methods;
    console.log(methods, "in render");
    return (
      <div className="timeline">
        {methods
          ? methods.map((method, i) => {
              return (
                <div className={i%2 == 0? "container left":"container right"}>
                  <div className="content">
                    <h2>
                      <Link to={{
                        pathname:"/methods",
                          state:{
                            method:method
                          }
                        }} >{method.method}</Link>
                    </h2>
                  </div>
                </div>
              );
            })
          : (
            <h1>Loading...</h1>
          )}
      </div>
    );
  }
}

export default Array;