import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main.css";
import { bounceInLeft } from "animate.css";

class Array extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    methods: []
  };

  componentDidMount = () => {
    fetch(
      "https://raw.githubusercontent.com/Swastikyadav/array-methods-api/master/array-method.js"
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
      <>
        <Header />
          <div className="timeline animated bounceInLeft fast">
            {methods.length == 0 ? (
                <div className="container left">
                <div className="content">
                  <h2>Loading...</h2>
                  <p>Please wait for a while...</p>
                </div>
              </div>
            ) : (
              methods.map((method, i) => {
                return (
                  <div
                    className={
                      i % 2 == 0 ? "container left" : "container right"
                    }
                  >
                    <div className="content">
                      <h2>
                        <Link
                          to={{
                            pathname: "/methods",
                            state: {
                              method: method
                            }
                          }}
                        >
                          {method.method}
                        </Link>
                      </h2>
                    </div>
                  </div>
                );
              })
            )}
          </div>
      </>
    );
  }
}

export default Array;
