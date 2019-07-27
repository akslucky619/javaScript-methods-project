import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main.css";

class Array extends React.Component {
  constructor(props) {
    super(props);
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
      <>
        <Header />
          <div className="timeline">
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
